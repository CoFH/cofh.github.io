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

with open("sprites.yml",'r') as f:
  data = yaml.load(f)
  spritesheet = Image.open("sheet.png")
  
  width = height = 32
  length = len(data)
  num_cols = math.floor(math.sqrt(length))
  num_rows = math.ceil(length / num_cols)
  new_sheet = Image.new('RGBA', (num_cols * (width + 1), num_rows * (height + 1)))
  
  offset = [1, 0]
  for id in sorted(data):
    x, y = data[id].pop("position")
    new_sheet.paste(spritesheet.crop((x * width, y * height, (x+1) * width, (y+1) * height)), (offset[0] * (width + 1), offset[1] * (height + 1)))
    data[id]["position"] = (offset[0], offset[1])
    
    offset[0] += 1
    if offset[0] >= num_cols:
      offset[0] = 0
      offset[1] += 1
    
  new_sheet.save(f'output/sprites.png')
  with open(f'output/sprites.yml','w') as output:
    yaml.dump(data, output, Dumper=NoAliasDumper)