(function beautifySearchPage() {  

function $(query) {
  return document.querySelector(query);
}

function $$(query) {
  return document.querySelectorAll(query);
}

function setStyle(obj, style) {
  if(obj === null) throw new Error('Null object');
  for (property in style) {
    obj.style[property] = style[property];
  }
}

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

function isDayOfWeek(text) {
  var days = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
  return days.indexOf(text) !== -1;
}

var styleNode = document.createElement('style');
  
// Generic Selectors - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$setStyle('*', {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
});

$setStyle('body', {
  'max-width': '88%',
  'margin' : '0 auto',
  'padding-left': '50px',
  'padding-bottom': '35px',
});

$setStyle('table', {
  'padding-right': '50px',
});
  
var bottomButton = 'input';
$setStyle(bottomButton, {
  'margin': '25px 0',
});
  
var releaseText = $('.releasetext');
setStyle(releaseText, {
  'position': 'absolute',
  'left': '41.5%',
});
releaseText.textContent = 'pasadena city college 8.1 ❤ rtspw';

// Specific Elements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var termText = 'font';
$setStyle(termText, {
  'font-weight': 'bold',
  'color': '#009B77',
});

// Templated Elements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
addStyleRule(styleNode, 'td.search_data', {
  'line-height': '1.6',
  'color': '#23282d',
});

// Adds space above new subject headers as margins cannot be used due to tables
var subjectHeaders = $$('td.subject_header');
subjectHeaders.forEach((header) => {
  header.parentNode.insertAdjacentHTML('beforebegin', '<td style="padding-top: 50px"></td>');
})
  
addStyleRule(styleNode, 'td.subject_header', {
  'padding-top': '50px',
  'background' : '#D65076',
  'letter-spacing': '1px',
});

var classHeaders = 'td.crn_header';
addStyleRule(styleNode, classHeaders, {
  'padding': '25px 0 10px 0',
  'color': '#B565A7',
});
  
addStyleRule(styleNode, '.column_header_left', {
  'padding': '10px',
  'background': 'none !important',
  'border-bottom': '2px solid grey',
  'color': '#5B5EA6',
  'text-align': 'center !important',
});
  
addStyleRule(styleNode, '.column_header_center', {
  'padding': '10px',
  'background': 'none !important',
  'border-bottom': '2px solid grey',
  'color': '#5B5EA6',
});

addStyleRule(styleNode, '.column_header_center a', {
  'color': '#5B5EA6',
  'text-decoration': 'underline dotted',
});

var professorElem = 'td[valign=top] ~ td:nth-child(18)';
addStyleRule(styleNode, professorElem, {
  'border-radius': '5px',
});
  
addStyleRule(styleNode, 'td.default1', {
  'text-align': 'center',
  'border-bottom': '1px solid #aaa',
  'background': '#fefefe',
});
  
addStyleRule(styleNode, 'td.default2', {
  'text-align': 'center',
  'border-bottom': '1px solid #aaa',
  'background': '#fafafa',
});

var defaultEntries = $$('td.default2, td.default1');
defaultEntries.forEach((elem) => {
  var textContent = elem.childNodes[0].textContent;
  if (textContent.includes('Restricted') 
      || textContent === 'Audition Required'
      || textContent === 'Permission of Dean') {
    elem.classList.add('status-restricted');
    elem.childNodes[0].removeAttribute('color');
    
  } else if (textContent === 'OPEN') {
    elem.classList.add('status-open');
    elem.childNodes[0].removeAttribute('color');
    
  } else if (textContent === 'CLOSED') {
    elem.classList.add('status-closed');
    elem.childNodes[0].removeAttribute('color');
    
  } else if (textContent === 'Waitlisted') {
    elem.classList.add('status-waitlisted');
    elem.childNodes[0].removeAttribute('color');
    
  } else if (isDayOfWeek(textContent)) {
    setStyle(elem, {
      'font-weight': 'bold',
    });
    // 'T' is also a 'Type' without a child node so this will
    // revert it back to the original state
    try { 
      elem.childNodes[0].setAttribute('color', '#2E4A62');
    } catch(e) {
      setStyle(elem, {
        'font-weight': 'normal',
      });
    }
  }
});
  
addStyleRule(styleNode, '.status-open', {
  'background': '#009B77 !important',
  'border-radius': '3px',
  'color': 'white !important',
});
  
addStyleRule(styleNode, '.status-closed', {
  'background': '#E94B3C !important',
  'border-radius': '3px',
  'color': 'white !important',
});
  
addStyleRule(styleNode, '.status-waitlisted', {
  'background': '#C0AB8E !important',
  'border-radius': '3px',
  'color': 'white !important',
});
  
addStyleRule(styleNode, '.status-restricted', {
  'background': '#6B5B95 !important',
  'border-radius': '3px',
  'color': 'white !important',
  'padding': '3px !important',
});

document.head.appendChild(styleNode);
  
})();