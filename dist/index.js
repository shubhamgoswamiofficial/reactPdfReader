'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./PdfReader.css');

require('./TextLayerBuilder.css');

var _index = require('./js/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_index2.default, {
  file: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
  renderType: 'canvas'
}), document.getElementById('root'));