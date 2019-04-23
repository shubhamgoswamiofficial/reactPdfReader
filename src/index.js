import React from 'react';
import { render } from 'react-dom';
import './PdfReader.css';
import './TextLayerBuilder.css';
import PDFReader from './js/index';

render(
  <PDFReader
    file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
    renderType="canvas"
  />,
  document.getElementById('root'),
);
