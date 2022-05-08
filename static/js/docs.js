/* Docs Cycle */
var cycleCount = 0;
const icons = [];
document.querySelectorAll(".docs-cycle").forEach((element) => icons.push(element.querySelectorAll(".docs-cycleable")));

if (icons.length > 0)
  setInterval(cycle, 1500);

function cycle() {
  icons.forEach((cyclables) => {
    if (!cyclables[0].closest(".docs-paused")) {
      //children[cycleCount % children.length].classList.add("hidden");
      cyclables.forEach((elem) => elem.classList.add("hidden"));
      var active = cyclables[cycleCount % cyclables.length];
      active.classList.remove("hidden");
      if (active.classList.contains("docs-sprite-empty")) {
        active.parentElement.classList.add("docs-icon-empty");
      }
      else {
        active.parentElement.classList.remove("docs-icon-empty");
      }
    }
  });
  cycleCount++;
}

document.querySelectorAll(".docs-pausable").forEach((elem) => {
    elem.onmouseover = event => {elem.classList.add("docs-paused");};
    elem.onmouseout = event => {elem.classList.remove("docs-paused");};
    elem.onfocusin = event => {elem.classList.add("docs-paused");};
    elem.onfocusout = event => {elem.classList.remove("docs-paused");};
  });

/* Recipe table hide/show */
document.querySelectorAll(".tables-toggle-hidden").forEach((elem) => {
		elem.onclick = toggleTableHidden;
    elem.addEventListener("keydown", (e) => {if (e.keyCode === 13) toggleTableHidden(e);});
  });

function toggleTableHidden(e) {
	e.target.innerHTML = e.target.innerHTML == "Show" ? "Hide" : "Show";
	e.target.parentNode.classList.toggle("tables-collapsed");
}

/* Multiblock */
const multiblockLayers = new WeakMap();
document.querySelectorAll(".multiblock-interactive").forEach((multiblock) => {
    var blocks = multiblock.querySelectorAll(".multiblock-block");
    var layers = [];
    for (const block of blocks) {
      var layer = block.dataset.layer;
      layers[layer] ??= [];
      layers[layer].push(block);
    }
    multiblockLayers.set(multiblock, layers);
    
    multiblock.querySelector(".multiblock-slider").addEventListener("input", (e) => selectLayer(e, multiblock));
  });

function selectLayer(e, multiblock) {
  showLayers(multiblock);
  var layer = e.target.value - 1;
  if (layer > -1) {
    var layers = multiblockLayers.get(multiblock);
    for (let i = 0; i < layers.length; i++) {
      if (i != layer) layers[i].forEach(elem => elem.classList.add("hidden"));
    }
  }
}

function showLayers(multiblock) {
  for (const layer of multiblockLayers.get(multiblock)) {
    layer.forEach(elem => elem.classList.remove("hidden"));
  }
}
