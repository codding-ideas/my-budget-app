import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

window.localStorage.setItem('name', 'Emmanuel');
ReactDOM.render(

  <App />
,
document.getElementById('root'));