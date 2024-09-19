import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global-styles.css';
import Home from './templates/home';
import { CounterContextProvider } from './context/CounterContext/indext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
    <Home />
    </CounterContextProvider>
  </React.StrictMode>
);

