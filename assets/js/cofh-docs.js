var num = 0;
const icons = [];
[].forEach.call(document.getElementsByClassName("docs-cycle"), (element) => {
    children = [];
    for (const child of element.childNodes) {
      if (child.nodeType == Node.ELEMENT_NODE && child.classList.contains("docs-cycleable")) {
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
      //children[num % children.length].classList.add("hidden");
      children.forEach((elem) => elem.classList.add("hidden"));
      children[(num + 1) % children.length].classList.remove("hidden");
    }
  });
  num++;
}

function isPaused(elem) {
  while (elem.parentNode) {
    elem = elem.parentNode;
    if (elem.tagName == "BODY")
      break;
    if (elem.classList.contains("docs-paused"))
      return true;
  }
  return false;
}

document.querySelectorAll('.docs-pausable').forEach(elem => {
    elem.onmouseover = event => {elem.classList.add("docs-paused");};
    elem.onmouseout = event => {elem.classList.remove("docs-paused");};
    elem.onfocusin = event => {elem.classList.add("docs-paused");};
    elem.onfocusout = event => {elem.classList.remove("docs-paused");};
  });

[].forEach.call(document.getElementsByClassName("tables-toggle-hidden"), (element) => {
		element.onclick = toggleTableHidden;
    element.addEventListener("keydown", (e) => {if (e.keyCode === 13) toggleTableHidden(e);});
  });

function toggleTableHidden(e) {
	e.target.innerHTML = e.target.innerHTML == "Show" ? "Hide" : "Show";
	e.target.parentNode.classList.toggle("tables-collapsed");
}