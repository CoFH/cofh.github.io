import os
from os.path import isfile, join

path = "sprites/"
images = [f for f in os.listdir(path) if isfile(join(path, f))]

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