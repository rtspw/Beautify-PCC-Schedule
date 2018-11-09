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
  
  
// Generic Selectors

var wildcardSelector = $('*');
setStyle(wildcardSelector, {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
});

var body = $('body')
setStyle(body, {
  'padding-bottom': '35px',
});

var termLabel = $('font');
setStyle(termLabel, {
  'font-weight': 'bold',
  'color': '#AD5D5D',
});

var allSelects = $$('select');
setStyleAll(allSelects, {
  'border': 'none',
  'border-left': '3px solid rgba(0, 165, 145, 0.5)',
});

var options = $$('option');
setStyleAll(options, {
  'padding': '4px 7px',
  'border-bottom': '1px solid #eeeeee',
  'color': '#3d3d3d',
});

var textInputs = $$('input[type=text]');
setStyleAll(textInputs, {
  'border-radius': '2px',
  'border': '1px solid #999',
  'padding': '2px',
  'color': '#778899',
});


// Top half tables

var mainTable = $('.search_table');
setStyle(mainTable, {
  'margin': 'auto',
  'border': 'none',
});
mainTable.setAttribute('width', 1000);

var searchHeaderLeft = $('.search_header_left');
setStyle(searchHeaderLeft, {
  'border': 'none',
  'width': '35%',
  'padding': '0 30px',
  'padding-left': '50px',
});

var searchHeaderLeftSelect = $('.search_header_left select');
setStyle(searchHeaderLeftSelect, {
  'margin-top': '10px',
});

var searchHeader = $('.search_header');
setStyle(searchHeader, {
  'width': '100%',
  'padding-right': '35px',
})

var searchHeaderText = $$('.search_header td');
setStyleAll(searchHeaderText, {
  'padding': '5px 0',
})

var headerBox = $('.search_table table:first-of-type:nth-child(1)');
setStyle(headerBox, {
  'width': '100%',
});


// Bottom half tables

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

var lowerTableRows = $$('table:nth-child(2) tr');
setStyleAll(lowerTableRows, {
  'padding': '100px 0',
});


// Modifying Specific Selects
  
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


// Bottom Button

var bottomButtons = $$('center')[2];
setStyle(bottomButtons, {
  'float': 'right',
});


// Bottom text
var releaseText = $('.releasetext');
setStyle(releaseText, {
  'position': 'absolute',
  'left': '41.5%',
});
releaseText.textContent = 'pasadena city college 8.1 ❤ rtspw';

searchHeaderRight[0].setAttribute('width', '250');
searchHeaderRight[8].setAttribute('width', '10');
  
})();
