import os
import glob
import json
import yaml
from PIL import Image
import math
import pprint
import copy

os.makedirs("output", exist_ok=True)

class NoAliasDumper(yaml.SafeDumper):
  def ignore_aliases(self, data):
    return True

def get_mappings(recipes):
  mappings = {"inputs": {}, "outputs": {}}
  for recipe_type in recipes:
    for recipe_name in recipes[recipe_type]:
      recipe = recipes[recipe_type][recipe_name]
      for put in ["inputs", "outputs"]:
        if put in recipe:
          for put_type in recipe[put]:
            for slot in recipe[put][put_type]:
              if slot is None:
                continue
              for ingredient in slot["id"]:
                if ingredient not in mappings[put]:
                  mappings[put][ingredient] = {}
                mapping = mappings[put][ingredient]
                if recipe_type not in mapping:
                  mapping[recipe_type] = set()
                mapping[recipe_type].add(recipe_name)
  for put in mappings:
    for id in mappings[put]:
      for recipe_type in mappings[put][id]:
        mappings[put][id][recipe_type] = list(mappings[put][id][recipe_type])
  return mappings

recipes = {}

for file in glob.glob("*.yml"):
  with open(file,'r') as f:
    recipes[os.path.splitext(file)[0]] = yaml.load(f)

mappings = get_mappings(recipes)

with open(f'output/inputs.yml','w') as output:
  yaml.dump(mappings["inputs"], output, Dumper=NoAliasDumper)
  
with open(f'output/outputs.yml','w') as output:
  yaml.dump(mappings["outputs"], output, Dumper=NoAliasDumper)
  