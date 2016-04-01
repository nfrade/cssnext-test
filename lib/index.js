'use strict'
// require('./global.css')
require('./style.css')

var DOM = require('vigour-util/is/node') ? {} : document.body
var e = require('vigour-element/e')

var app = global.app = e({
  DOM: DOM,
  title: {
    text: 'This is title'
  }
})
