/* Docs Cycle */
var cycleCount = 0;
const icons = [];
[].forEach.call(document.getElementsByClassName("docs-cycle"), (element) => {
    children = [];
    for (const child of element.children) {
      if (child.classList.contains("docs-cycleable")) {
        children.push(child);
      }
    }
    icons.push(children);
  });

if (icons.length > 0)
  setInterval(cycle, 1500);

function cycle() {
  [].forEach.call(icons, (children) => {
    if (!isPaused(children[0])) {
      //children[cycleCount % children.length].classList.add("hidden");
      children.forEach((elem) => elem.classList.add("hidden"));
      children[(cycleCount + 1) % children.length].classList.remove("hidden");
    }
  });
  cycleCount++;
}

function isPaused(elem) {
  while (elem) {
    if (elem.tagName == "BODY")
      break;
    if (elem.classList.contains("docs-paused"))
      return true;
    elem = elem.parentElement;
  }
  return false;
}

document.querySelectorAll('.docs-pausable').forEach(elem => {
    elem.onmouseover = event => {elem.classList.add("docs-paused");};
    elem.onmouseout = event => {elem.classList.remove("docs-paused");};
    elem.onfocusin = event => {elem.classList.add("docs-paused");};
    elem.onfocusout = event => {elem.classList.remove("docs-paused");};
  });

/* Recipe table hide/show */
[].forEach.call(document.getElementsByClassName("tables-toggle-hidden"), (element) => {
		element.onclick = toggleTableHidden;
    element.addEventListener("keydown", (e) => {if (e.keyCode === 13) toggleTableHidden(e);});
  });

function toggleTableHidden(e) {
	e.target.innerHTML = e.target.innerHTML == "Show" ? "Hide" : "Show";
	e.target.parentNode.classList.toggle("tables-collapsed");
}

/* Multiblock */
const multiblockLayers = new WeakMap();
[].forEach.call(document.getElementsByClassName("multiblock-interactive"), (multiblock) => {
    var blocks = multiblock.querySelectorAll(".multiblock-block");
    var layers = [];
    for (const block of blocks) {
      var layer = block.dataset.layer;
      layers[layer] ??= [];
      layers[layer].push(block);
    }
    multiblockLayers.set(multiblock, [-1, layers]);
    
    var buttons = multiblock.querySelectorAll(".multiblock-layer-toggle");
    for (const button of buttons) {
      button.onclick = (e) => toggleLayer(multiblock, button);
      button.onmouseover = (e) => highlightLayer(multiblock, button.dataset.layer);
      button.onmouseout = (e) => unhighlightLayers(multiblock);
    }
  });

function toggleLayer(multiblock, button) {
  var layer = button.dataset.layer;
  showLayers(multiblock);
  if (multiblockLayers.get(multiblock)[0] == layer) {
    multiblockLayers.get(multiblock)[0] = -1;
    button.classList.remove("multiblock-button-active");
  }
  else {
    [].forEach.call(button.parentElement.children, (elem) => elem.classList.remove("multiblock-button-active"));
    button.classList.add("multiblock-button-active");
    multiblockLayers.get(multiblock)[0] = layer;
    var layers = multiblockLayers.get(multiblock)[1];
    for (let i = 0; i < layers.length; i++) {
      if (i != layer)
        layers[i].forEach(elem => {
            elem.classList.add("hidden");
            elem.classList.remove("multiblock-hidden");
          });
      else {
        layers[i].forEach(elem => {
            elem.classList.remove("multiblock-transparent");
            elem.classList.remove("hidden");
            elem.classList.remove("multiblock-hidden");
          });
      }
    }
  }
}

function showLayers(multiblock) {
  var layers = multiblockLayers.get(multiblock)[1];
  for (let i = 0; i < layers.length; i++) {
    layers[i].forEach(elem => {
        elem.classList.remove("hidden");
        elem.classList.remove("multiblock-hidden");
      });
  }
}

function highlightLayer(multiblock, layer) {
  var layers = multiblockLayers.get(multiblock)[1];
  for (let i = 0; i < layers.length; i++) {
    if (i != layer)
      layers[i].forEach(elem => elem.classList.add("multiblock-transparent"));
    else {
      layers[i].forEach(elem => {
          elem.classList.remove("multiblock-transparent");
          if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
            elem.classList.add("multiblock-hidden");
          }
        });
    }
  }
}

function unhighlightLayers(multiblock) {
  var layers = multiblockLayers.get(multiblock)[1];
  for (let i = 0; i < layers.length; i++) {
    layers[i].forEach(elem => {
        elem.classList.remove("multiblock-transparent");
        if (elem.classList.contains("multiblock-hidden")) {
          elem.classList.remove("multiblock-hidden");
          elem.classList.add("hidden");
        }
      });
  }
}
