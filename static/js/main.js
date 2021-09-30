/* 
 *  ARIA-expanded support
 */
document.querySelectorAll('.popup').forEach(element => {
    const parent = element.parentElement;
    parent.onmouseover = event => {element.setAttribute("aria-expanded", true);};
    parent.onmouseout = event => {element.setAttribute("aria-expanded", false);};
    parent.onfocusin = event => {element.setAttribute("aria-expanded", true);};
    parent.onfocusout = event => {element.setAttribute("aria-expanded", false);};
  });

/*
 *  Search Autocomplete
 */ 
// Useful variables
const MIN_INPUT_CHARS = 3;
const MAX_RESULTS = 5;
const input = document.getElementById("search-input");
const list = document.getElementById("search-autocomplete-list");
const pages = [
  {{- range where .Pages "Section" "docs" }}{{ if .Title }}
    {title: "{{ .Title }}",
     url: "{{ .RelPermalink }}",
     {{ if or .Params.version .Params.mods -}}
       {{- $mods := apply ((slice) | append .Params.mods) "title" "." -}}
       {{- $sub := printf `%v %v` .Params.version (index $mods 0) -}}
       {{- range after 1 $mods -}}
        {{- $sub = printf `%v, %v` $sub . -}}
       {{- end -}}
     sub: "{{$sub}}"
     {{- end }}},
  {{ end -}}{{- end -}}
  ];

// Starts/updates autocomplete whenever the input changes.
input.addEventListener("input", autocomplete);

// Allows for pressing enter to submit.
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && e.target.value)
      window.location.href = 'https://google.com/search?q=' + e.target.value + '&as_sitesearch=' + window.location.hostname;
  });

// Displays a list of autocomplete results, based on the current value of the search input.
function autocomplete() {
  while(list.firstChild) {
    list.firstChild.remove();
  }
  
  const searchInput = input.value;
  if (!searchInput || searchInput.length < MIN_INPUT_CHARS) 
    return false;
  
  var numResults = 0;
  for (const page of pages) {
    if (numResults >= MAX_RESULTS)
      break;
    if (page.title.toUpperCase().indexOf(searchInput.toUpperCase()) > -1) {
      numResults++;
      
      const result = document.createElement("li");
      result.setAttribute("class", "autocomplete-result");
      list.appendChild(result);
      
      const link = document.createElement("a");
      link.innerHTML = page.title;
      link.setAttribute("href", page.url);
      link.setAttribute("class", "nav-link");
      result.appendChild(link);
      
      const url = document.createElement("div");
      url.innerHTML = page.sub;
      url.setAttribute("class", "subtext");
      link.appendChild(url);
    }
  }
}
