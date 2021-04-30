import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <App
    title="ERWT Boilerplate"
    version="3.0.0"
  />
);

// Render application in DOM
ReactDOM.render(
  app,
  document.getElementById('app'),
);
