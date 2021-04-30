import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { isDev } from 'helpers/isDev';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <App
    title="ERWT Boilerplate by Clovel !"
    version="3.0.0"
  />
);

// Render application in DOM
ReactDOM.render(
  app,
  document.getElementById('app'),
);

// Hot module replacement
if(isDev() && module.hot) module.hot.accept();
