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

function isDayOfWeek(text) {
  var days = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
  return days.indexOf(text) !== -1;
}


// Generic Selectors

var wildcardSelector = $('*');
setStyle(wildcardSelector, {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
});

var body = $('body')
setStyle(body, {
  'max-width': '88%',
  'margin' : '0 auto',
  'padding-left': '50px',
});

var mainTable = $('table');
setStyle(mainTable, {
  'padding-right': '50px',
});


// Specific Elements

var termText = $('font');
setStyle(termText, {
  'font-weight': 'bold',
  'color': '#009B77',
});

// Templated Elements

var searchData = $$('td.search_data');
setStyleAll(searchData, {
  'line-height': '1.6',
  'color': '#23282d',
});

var subjectHeaders = $$('td.subject_header');
setStyleAll(subjectHeaders, {
  'padding-top': '50px',
  'background' : '#D65076',
  'letter-spacing': '1px',
});
subjectHeaders.forEach((header) => {
  header.parentNode.insertAdjacentHTML('beforebegin', '<td style="padding-top: 50px"></td>');
})

var classHeaders = $$('td.crn_header');
setStyleAll(classHeaders, {
  'padding': '25px 0 10px 0',
  'color': '#B565A7',
});

var columnHeadersLeft = $$('.column_header_left');
setStyleAll(columnHeadersLeft, {
  'padding': '10px',
  'background': 'none',
  'border-bottom': '2px solid grey',
  'color': '#5B5EA6',
});

var columnHeadersCenter = $$('.column_header_center');
setStyleAll(columnHeadersCenter, {
  'padding': '10px',
  'background': 'none',
  'border-bottom': '2px solid grey',
  'color': '#5B5EA6',
});

var columnHeaderLinks = $$('.column_header_center a');
setStyleAll(columnHeaderLinks, {
  'color': '#5B5EA6',
  'text-decoration': 'underline dotted',
});

var defaultEntries = $$('td.default2, td.default1');
setStyleAll(defaultEntries, {
  'text-align': 'center',
  'border-bottom': '1px solid #aaa',
  'background': '#fefefe',
});

defaultEntries.forEach((elem) => {
  var textContent = elem.childNodes[0].textContent;
  if (textContent.includes('Restricted') 
      || textContent === 'Audition Required'
      || textContent === 'Permission of Dean') {
    setStyle(elem, {
      'background': '#6B5B95',
      'border-radius': '3px',
    });
    elem.childNodes[0].setAttribute('color', 'white');
  } else if (textContent === 'OPEN') {
    setStyle(elem, {
      'background': '#009B77',
      'border-radius': '3px',
    });
    elem.childNodes[0].setAttribute('color', 'white');
  } else if (textContent === 'CLOSED') {
    setStyle(elem, {
      'background': '#E94B3C',
      'border-radius': '3px',
    });
    elem.childNodes[0].setAttribute('color', 'white');
  } else if (textContent === 'Waitlisted') {
    setStyle(elem, {
      'background': '#C0AB8E',
      'border-radius': '3px',
    });
    elem.childNodes[0].setAttribute('color', 'white');
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

})();

