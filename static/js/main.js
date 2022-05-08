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
const searchList = document.getElementById("search-autocomplete-list");
const searchData = {{ partialCached "main/search_data" .Site }};

// Starts/updates autocomplete whenever the input changes.
input.addEventListener("input", autocomplete);

// Allows for pressing enter to submit.
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && e.target.value)
      window.location.href = 'https://google.com/search?q=' + e.target.value + '&as_sitesearch=' + window.location.hostname;
  });

// Displays a list of autocomplete results, based on the current value of the search input.
function autocomplete() {
  while(searchList.firstChild) {
    searchList.firstChild.remove();
  }
  
  const searchInput = input.value;
  if (!searchInput || searchInput.length < MIN_INPUT_CHARS) 
    return false;
  
  const searchTerms = searchInput.toLowerCase().split(" ");
  
  var results = searchData.mapping[searchTerms[0].substring(0, 3)];
  if (results === undefined) {
    return false;
  }
  for (const term of searchTerms) {
    results = results.filter(index => searchData.pages[index].keywords.findIndex(keyword => keyword.includes(term)) > -1);
  }
  
  for (var i = 0; i < MAX_RESULTS; ++i) {
    if (results[i] === undefined) {
      break;
    }
    const page = searchData.pages[results[i]];
    
    const result = document.createElement("li");
    result.setAttribute("class", "autocomplete-result");
    searchList.appendChild(result);
    
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
