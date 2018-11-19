(function beautifySearch() {

function $(query) {
  return document.querySelector(query);
}

function $$(query) {
  return document.querySelectorAll(query);
}
  
function $$$(query) {
  return document.getElementsByName(query);
}

// Sets the style for a single node
function setStyle(obj, style) {
  if(obj === null) throw new Error('Null object');
  for (property in style) {
    obj.style[property] = style[property];
  }
}

// Sets the style for a collection of nodes
function setStyleAll(objCollection, style) {
  if(objCollection === null) throw new Error('Null Collection');
  objCollection.forEach((obj) => {
    setStyle(obj, style);
  });
}

// Set the style for the first node found by the selector
// Style should be an object with css properties
function $setStyle(selector, style) {
  var target = $(selector);
  setStyle(target, style);
}

// Converts a css property object into a text node
// which is inserted into the document head as a style node
function addStyleRule(styleNode, targetStr, cssObj) {
  var finalCSS = '';
  finalCSS += targetStr + '{';
  for (var property in cssObj) {
    finalCSS += property + ': ' + cssObj[property] + ';';
  }
  finalCSS += '}'
  styleNode.appendChild(document.createTextNode(finalCSS));
}

var styleNode = document.createElement('style');
  
// Generic Selectors - - - - - - - - - - - - - - - - - - - - - -

$setStyle('*', {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
});

$setStyle('body', {
  'padding-bottom': '35px',
})

// Selects label for the term name
$setStyle('font', {
  'font-weight': 'bold',
  'color': '#D65076',
});
  
addStyleRule(styleNode, 'select', {
  'border': 'none',
  'border-left': '3px solid rgba(0, 165, 145, 0.5)',
});
  
addStyleRule(styleNode, 'option', {
  'padding': '4px 7px',
  'border-bottom': '1px solid #eeeeee',
  'color': '#3d3d3d',
});
  
addStyleRule(styleNode, 'input[type=text]', {
  'border-radius': '2px',
  'border': '1px solid #999',
  'padding': '2px',
  'color': '#778899',
});

// Top half tables - - - - - - - - - - - - - - - - - - - - - -

$setStyle('.search_table', {
  'margin': 'auto',
  'border': 'none',
});
$('.search_table').setAttribute('width', 1000);

$setStyle('.search_header_left', {
  'border': 'none',
  'width': '35%',
  'padding': '0 30px',
  'padding-left': '50px',
});

$setStyle('.search_header_left select', {
  'margin-top': '10px',
});

$setStyle('.search_header', {
  'width': '100%',
  'padding-right': '35px',
})

var searchHeaderText = '.search_header td';
addStyleRule(styleNode, searchHeaderText, {
  'padding': '5px 0',
})

var headerBox = '.search_table table:first-of-type:nth-child(1)';
$setStyle(headerBox, {
  'width': '100%',
});


// Bottom half tables - - - - - - - - - - - - - - - - - - - - - -

var allTables = $$('table');

var lowerTable = allTables[6];
setStyle(lowerTable, {
  'border-bottom': '1px solid grey',
  'padding-right': '40px',
});

var lowerLeftTable = allTables[7];
setStyle(lowerLeftTable, {
  'border-spacing': '0 5px',
  'margin-bottom': '25px',
});

var lowerRightTable = allTables[8];
setStyle(lowerRightTable, {
  'border-bottom': 'none',
  'border-spacing': '0 5px',
});

var searchHeaderRight = $$('.search_header_right');
setStyleAll(searchHeaderRight, {
  'padding-right': '20px',
});

searchHeaderRight[0].setAttribute('width', '250');
searchHeaderRight[8].setAttribute('width', '10');
  
var lowerTableRows = $$('table:nth-child(2) tr');
setStyleAll(lowerTableRows, {
  'padding': '100px 0',
});


// Modifying Specific Selects - - - - - - - - - - - - - - - - - - - - - -
  
var courseLevelSelect = $$$('sel_schd')[1];
courseLevelSelect.setAttribute('size', '3');
  
var subjectSelect = $$$('sel_subj')[1];
subjectSelect.setAttribute('size', '10');
  
var partOfTermSelect = $$$('sel_ptrm')[1];
console.log(partOfTermSelect);
partOfTermSelect.setAttribute('size', '6');
  
var sessionsSelect = $$$('sel_sess')[1];
sessionsSelect.setAttribute('size', '5');
  
var scheduleTypeSelect = $$$('sel_ism')[1];
scheduleTypeSelect.setAttribute('size', '10');


// Bottom Button - - - - - - - - - - - - - - - - - - - - - -

var bottomButtons = $$('center')[2];
setStyle(bottomButtons, {
  'float': 'right',
});


// Bottom text - - - - - - - - - - - - - - - - - - - - - -
  
var releaseText = $('.releasetext');
setStyle(releaseText, {
  'position': 'absolute',
  'left': '41.5%',
});
releaseText.textContent = 'pasadena city college 8.1 ❤ rtspw';

document.head.appendChild(styleNode);
  
})();
