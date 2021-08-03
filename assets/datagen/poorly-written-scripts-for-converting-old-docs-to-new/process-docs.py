import os
import glob
import yaml
import math
import pprint
import copy
import re

with open("docnav.yml",'r') as f:
  docnav = yaml.full_load(f)

crafting_recipes = {}
with open("crafting-shaped.yml",'r') as f:
  crafting_recipes["crafting-shaped"] = list(yaml.full_load(f).keys())
with open("crafting-shapeless.yml",'r') as f:
  crafting_recipes["crafting-shapeless"] = list(yaml.full_load(f).keys())

with open("sprites.yml",'r') as f:
  sprite_data = yaml.full_load(f)

os.makedirs("output", exist_ok=True)

class NoAliasDumper(yaml.SafeDumper):
  def ignore_aliases(self, data):
    return True

def search_docnav_helper(query, data, prepend, titles, is_item=False):
  if isinstance(data, dict):
    if "url" in data and (prepend + data["url"]) == query:
      if "title" in data and "icon" not in data and not is_item:
        return titles + ["$" + data["title"]] 
      else:
        return titles
    else:
      if "title" in data:
        titles = titles + [data["title"]]
      for key in data:
        if output := search_docnav_helper(query, data[key], prepend, titles, is_item=(key in ["items", "subitems"])):
          return output
  
  if isinstance(data, list):
    for element in data:
      if output := search_docnav_helper(query, element, prepend, titles, is_item):
        return output
  
  return None

def search_docnav(url):
  for mod in docnav:
    if output := search_docnav_helper(url, docnav[mod]["sections"], docnav[mod]["url"], []):
      return output
  return None

def search_sprites(title):
  for id in sprite_data:
    if sprite_data[id]["name"] == title:
      return id
  return None

def get_front_matter(lines):
  index = find_line_index("---", lines)
  return (index, yaml.full_load("".join(lines[1:index])))

def find_line_index(query, lines):
  for i in range(1, len(lines)):
    if query in lines[i]:
      return i

for file in glob.iglob("1.12/**/*.md", recursive=True):
  with open(file,'r') as f:
    lines = f.readlines()
  
  index, data = get_front_matter(lines)
  data.pop("redirect_from", None)
  
  for key in ["recipes", "usage-recipes"]:
    if key in data and (recipes := data[key].pop("crafting", None)):
      crafting = {"crafting-shaped": [], "crafting-shapeless": []}
      for crafting_type in ["crafting-shaped", "crafting-shapeless"]:
        for recipe in recipes:
          if recipe in crafting_recipes[crafting_type]:
            crafting[crafting_type].append(recipe)
        if len(crafting[crafting_type]) == 0:
          crafting.pop(crafting_type)
      data[key].update(crafting)
      for i in range(len(lines)-1, -1, -1):
        if lines[i].startswith("{% include docs/recipe/table/table.html type='crafting' recipe-ids=page." + key + ".crafting"):
          if len(crafting) == 2:
            lines[i] = lines[i].replace("crafting", "crafting-shapeless")
            lines.insert(i, lines[i].replace("crafting-shapeless", "crafting-shaped"))
          elif "crafting-shaped" in crafting:
            lines[i] = lines[i].replace("crafting", "crafting-shaped")
          elif "crafting-shapeless" in crafting:
            lines[i] = lines[i].replace("crafting", "crafting-shapeless")
  
  if "index.md" not in file:
    url = os.path.splitext(file)[0].replace("\\", "/") + "/"
    if categories := search_docnav(url):
      if len(categories) == 1:
        category = categories[0]
        if "$" in category:
          data["category-main"] = True
          category = category.replace("$", "")
      else:
        category = categories[len(categories) - 2]
        subcategory = categories[len(categories) - 1]
        if "$" in subcategory:
          data["subcategory-main"] = True
          subcategory = subcategory.replace("$", "")
        data["subcategory"] = subcategory
      data["category"] = category
  
  if "title" in data and (subject := search_sprites(data["title"])):
    data["subjects"] = [subject]
  if "image" not in data:
    data["show-image"] = False
  
  content = lines[0] + yaml.dump(data, Dumper=NoAliasDumper) + "".join(lines[index:])
  with open(file,'w') as f:
    f.write(content)
