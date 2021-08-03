import os
from os.path import isfile, join
from pathlib import Path

path = "./"
docs = [doc for doc in Path(path).rglob('*.md')]

for doc in docs:
  folder, file = os.path.split(doc)
  os.replace(doc, folder + ".md")

'''
for image in images:
  elements = image.split("__")
  elements[len(elements) - 1] = elements[len(elements) - 1].replace(".png", "")
  print(elements)
  if len(elements) == 1:
    continue
  elif elements[0] == "fluid":
    os.makedirs(f"{path}{elements[1]}".replace("_", "-"), exist_ok=True)
    os.replace(path + image, f"{path}{elements[1]}/fluid_{elements[2]}.png".replace("_", "-"))
  else:
    os.makedirs(f"{path}{elements[0]}".replace("_", "-"), exist_ok=True)
    os.replace(path + image, f"{path}{elements[0]}/{elements[1]}.png".replace("_", "-"))
'''
