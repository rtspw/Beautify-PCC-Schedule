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


// Generic Selectors

var wildcardSelector = $('*');
setStyle(wildcardSelector, {
  'margin': 0,
  'padding': 0,
  'box-sizing': 'border-box',
});

var body = $('body')
setStyle(body, {
  'padding': '0 10%',
});



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

var defaultEntries = $$('td.default2');
setStyleAll(defaultEntries, {
  'padding': '10px 0',
});
