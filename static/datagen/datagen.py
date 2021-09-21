#Takes a folder containing: a folder of sprites from the iconexporter mod, a copy of King Lemming's 1.15+ workspace, a copy of Forge's data folder (which includes MC tags), and a copy of MC's lang folder.
#Outputs a folder containing: a spritesheet and YAML files for recipes, recipe mappings, and sprite mappings.
#Relevant links:
#https://github.com/KingLemming/1.16
#https://github.com/MinecraftForge/MinecraftForge/tree/1.16.x/src/generated/resources/data/forge/tags
#https://www.curseforge.com/minecraft/mc-mods/iconexporter
import os
import glob
import json
import yaml
from PIL import Image
import math
import pprint
import copy

input_folder = "data_input"
output_folder = "data_output"
os.makedirs(output_folder, exist_ok=True)

#Recursively traverses data to remove all namespaces.
def remove_namespace(data):
  if isinstance(data, str):
    return data.partition(":")[2] if ":" in data else data
  if isinstance(data, list):
    return [remove_namespace(string) for string in data]
  if isinstance(data, dict):
    new = {}
    for key in data:
      new[key] = remove_namespace(data[key])
    return new
  return data

class NoAliasDumper(yaml.SafeDumper):
  def ignore_aliases(self, data):
    return True

class RecipeMaker():
  def __init__(self, data):
    tag_path = f"./{input_folder}/**/data/*/tags/**/*.json"
    recipe_path = f"./{input_folder}/**/data/*/recipes/**/*.json"
    recipe_exclude = [f"./{input_folder}/**/data/minecraft/recipes/**/*.json"]
    
    self.data = data
    self.tags = self.get_tags(tag_path)
    
    self.recipes = remove_namespace(self.get_recipes(recipe_path, recipe_exclude))
    self.get_mappings()
    
    self.write_output(output_folder)
  
  def get_tags(self, tag_glob):
    tags = {}
    queue = {}
    for file in glob.iglob(tag_glob, recursive=True):
      folders = os.path.normpath(file).split(os.sep)
      if folders[folders.index("tags")+1] == "fluids":
        continue
      namespace = folders[folders.index("data")+1]
      folders = folders[folders.index("tags")+2:]
      folders[-1] = folders[-1].replace(".json", "")
      tag = f"{namespace}:{'/'.join(folders)}"
      with open(file,'r') as f:
        values = json.load(f)["values"]
        self.add_tag(tags, tag, values)
        if nested_tags := [value for value in values if "#" in value]:
          queue[tag] = nested_tags
    self.resolve_nested_tags(tags, queue)
    for tag in tags:
      tags[tag] = sorted(list(tags[tag]), key=lambda id: (len(id), id))
    return tags

  def resolve_nested_tags(self, tag_data, queue):
    num_resolved = 0
    empty_tags = []
    for tag in queue:
      for i in range(len(queue[tag])-1, -1, -1):
        if (nested_tag := queue[tag][i].replace("#", "")) in tag_data:
          self.add_tag(tag_data, tag, tag_data[nested_tag])
          queue[tag].pop(i)
          num_resolved += 1
        if not queue[tag]:
          empty_tags.append(tag)
    for tag in empty_tags:
      queue.pop(tag)
    if num_resolved < 1:
      raise AssertionError("Recursive tag resolution failed. Please check to make sure all tags are present.")
    if len(queue) > 0:
      self.resolve_nested_tags(self, tag_data, queue)
  
  def add_tag(self, tag_data, tag, values):
    if tag not in tag_data:
      tag_data[tag] = set()
    tag_data[tag].update([value for value in values if "#" not in value])
  
  def get_recipes(self, path, exclude=[]):
    recipes = {}
    files = set(glob.glob(path, recursive=True))
    for pattern in exclude:
      files -= set(glob.glob(pattern, recursive=True))
    for file in files:
      #Exclude all compat recipes
      if "compat" not in file and "plugins" not in file:
        with open(file,'r') as f:
          data = self.clean_recipe(json.load(f))
          if (type := data.pop("type")) not in recipes:
            recipes[type] = {}
          recipes[type][os.path.split(file)[1].replace(".json", "")] = data
    return recipes
  
  def clean_recipe(self, recipe):
    recipe["type"] = remove_namespace(recipe["type"])
    recipe.pop("conditions", None)
    
    if recipe["type"] == "crafting_shaped":
      self.parse_crafting_shaped(recipe)
      return recipe
    
    for alt_name in ["ingredient", "ingredients", "input"]:
      if alt_name in recipe:
        recipe["inputs"] = recipe.pop(alt_name)
    for alt_name in ["result", "output"]:
      if alt_name in recipe and not isinstance(recipe[alt_name], (float, int)):
        recipe["outputs"] = recipe.pop(alt_name)
    
    for io in ["inputs", "outputs"]:
      if io in recipe:
        recipe[io] = self.clean_io(recipe[io])
    return recipe
  
  def parse_crafting_shaped(self, recipe):
    keys = recipe.pop("key")
    for key in keys:
      keys[key] = self.clean_slot(keys[key])
      keys[key].pop("type")
    recipe["inputs"] = {"item": []}
    for row in recipe.pop("pattern"): 
      for item in row:
        if item == " ":
          recipe["inputs"]["item"].append(None)
        else:
          recipe["inputs"]["item"].append(keys[item])
    output = self.clean_slot(recipe.pop("result"))
    output.pop("type")
    recipe["outputs"] = {"item": [output]}
  
  #Takes an arbitrary recipe in/output and returns a standardized dict.
  def clean_io(self, io):
    if isinstance(io, list):
      cleaned_io = {"item": [], "fluid": []}
      for slot in io:
        cleaned_slot = self.clean_slot(slot)
        cleaned_io[cleaned_slot.pop("type")].append(cleaned_slot)
      
      for type in ["item", "fluid"]:
        if not cleaned_io[type]:
          cleaned_io.pop(type)
      return cleaned_io
    
    if isinstance(io, (str, dict)):
      cleaned_slot = self.clean_slot(io)
      return {cleaned_slot.pop("type"): [cleaned_slot]}
    
    return None
  
  #Takes an arbitrary in/output slot and returns a standardized dict containing the type.
  def clean_slot(self, slot):
    if isinstance(slot, list):
      ids = []
      type = None
      for elem in slot:
        cleaned = self.clean_slot(elem)
        type = cleaned.pop("type")
        ids += cleaned["id"]
      return {"type": type, "id": ids}
    
    if isinstance(slot, dict):
      slot = copy.copy(slot)
      if "value" in slot:
        cleaned = self.clean_slot(slot.pop("value"))
        slot["id"] = cleaned["id"]
        slot["type"] = cleaned["type"]
      elif "tag" in slot:
        slot["id"] = self.tags[slot.pop("tag")]
        slot["type"] = self.get_type(slot["id"][0])
      else:
        type = slot["type"] = self.get_type(slot)
        id = slot.pop(type)
        slot["id"] = [id.replace(":", ":fluid_")] if type == "fluid" else [id]
      if "chance" in slot and slot.pop("locked", None):
        slot["count"] = slot.pop("chance")
      return slot
    
    if isinstance(slot, str):
      if slot in self.tags:
        ids = self.tags[slot]
        type = self.get_type(ids[0])
        return {"type": type, "id": [id.replace(":", ":fluid_") for id in ids] if type == "fluid" else ids}
      type = self.get_type(slot)
      if type:
        return {"type": type, "id": [slot.replace(":", ":fluid_")] if type == "fluid" else [slot]}
    
    return None
  
  def get_type(self, id):
    if isinstance(id, dict):
      for type in ["item", "fluid"]:
        if type in id:
          return type
      for key in id:
        if (type := self.get_type(id[key])) is not None:
          return type
    
    if isinstance(id, str):
      if (id := remove_namespace(id)) in self.data:
        return "item"
      if f"fluid_{id}" in self.data:
        return "fluid"
      return self.is_nyi(id)
    return None
  
  #Temporary bypass for items that have not yet been fully implemented.
  def is_nyi(self, id):
    for nyi in ["ruby", "sapphire", "nuke"]:
      if nyi in id:
        return "item"
    for nyi in ["glowstone"]:
      if nyi in id:
        return "fluid"
    return None
  
  def get_mappings(self):
    for recipe_type in self.recipes:
      for recipe_name in self.recipes[recipe_type]:
        recipe = self.recipes[recipe_type][recipe_name]
        for io in ["inputs", "outputs"]:
          if io in recipe:
            for io_type in recipe[io]:
              for slot in recipe[io][io_type]:
                if slot is None:
                  continue
                for ingredient in slot["id"]:
                  if ingredient in self.data:
                    if io not in self.data[ingredient]:
                      self.data[ingredient][io] = {}
                    if recipe_type not in self.data[ingredient][io]:
                      self.data[ingredient][io][recipe_type] = set()
                    self.data[ingredient][io][recipe_type].add(recipe_name)
    for id in self.data:
      for io in ["inputs", "outputs"]:
        if io in self.data[id]:
          for recipe_type in self.data[id][io]:
           self.data[id][io][recipe_type] = list(self.data[id][io][recipe_type])
    return self.data
  
  def write_output(self, path):
    for type in self.recipes:
      with open(f"{path}{os.sep}{type}.yml",'w') as output:
        yaml.dump(self.recipes[type], output, Dumper=NoAliasDumper)
    with open(f'{path}/items-fluids.yml','w') as output:
      yaml.dump(self.data, output, Dumper=NoAliasDumper)

class SpritesheetMaker():
  def __init__(self):
    sprites_input = f"./{input_folder}/sprites/*.png"
    lang_input = f"./{input_folder}/**/lang/en_us.json"
    self.data = SpritesheetMaker.get_sprite_data(sprites_input)
    lang_data = SpritesheetMaker.get_lang_data(lang_input)
    SpritesheetMaker.add_lang_data(lang_data, self.data)
    SpritesheetMaker.create_files(self.data)

  #Returns a basic dict of sprite data from a glob pattern. 
  #Does not include duplicate items (potions, enchanted books, etc) and flowing variants for fluids.
  def get_sprite_data(image_glob):
    data = {}
    previous = ""
    for path in glob.iglob(image_glob):
      filename = os.path.splitext(os.path.split(path)[1])[0]
      elements = filename.split("__")
      if elements[0] == "fluid":
        namespace = elements[1]
        id = f"fluid_{elements[2]}"
        if "flowing" in id or id == previous:
          continue
        previous = id
        data[id] = {"mod": namespace, "sprite": Image.open(path)}
      else: 
        namespace = elements[0]
        id = elements[1]
        if id == previous:
          continue
        previous = id
        data[id] = {"mod": namespace, "sprite": Image.open(path)} 
    return data
  
  #Uses lang data to add localizable names to sprite data.
  def add_lang_data(lang_data, sprite_data):
    for key in sprite_data:
      if key != "type":
        partial = f"{sprite_data[key]['mod']}.{key.replace('-', '_')}"
        for id in [f"block.{partial}", f"item.{partial}", f"fluid.{partial.replace('fluid_', '')}"]:
          if name := lang_data.pop(id, None):
            sprite_data[key]['name'] = name
            continue
    return sprite_data
  
  #Retrieves lang files to create a dict of lang data.
  def get_lang_data(lang_glob):
    data = {}
    for file in glob.iglob(lang_glob, recursive=True):
      with open(file,'r') as f:
        data.update(json.load(f))
    return data
  
  #Uses sprite data to create the spritesheet and maping file.
  def create_files(sprite_data):
    width, height = sprite_data[next(iter(sprite_data))]["sprite"].size
    length = len(sprite_data)
    num_cols = math.floor(math.sqrt(length))
    num_rows = math.ceil(length / num_cols)
    sheet = Image.new('RGBA', (num_cols * (width + 1), num_rows * (height + 1)))
    
    offset = [1, 0]
    for key in sprite_data:
      sprite_data[key]["position"] = (offset[0], offset[1])
      sheet.paste(sprite_data[key].pop("sprite"), (offset[0] * (width + 1), offset[1] * (height + 1)))
      
      offset[0] += 1
      if offset[0] >= num_cols:
        offset[0] = 0
        offset[1] += 1
    
    sheet.save(f'{output_folder}{os.sep}sprites.png')

sprites = SpritesheetMaker()
recipes = RecipeMaker(sprites.data)
