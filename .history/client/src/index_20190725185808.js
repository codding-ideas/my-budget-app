import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

localStorage.setItem('name', 'Emmanuel');

console.log(localStorage.toke)
ReactDOM.render(

  <App />
,
document.getElementById('root'));