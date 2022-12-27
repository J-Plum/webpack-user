import React from 'react';
import ReactDOM from 'react-dom/client';

import WordRelay from './WordRelay';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <WordRelay />
   </React.StrictMode>
);
// const React = require('react');
// const ReactDom = require('react-dom/client');

// const WordRelay = require('./WordRelay');

// ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay />);