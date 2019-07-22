import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//Runing the userloaded method
import  { loadUser } from  './redux/actions/auth';
import setAuthToken from './utils/setAuthToken'

//========LOADE USER METHOD FROM ACTION===============
if(localStorage.token){
  setAuthToken(localStorage.token)
}




ReactDOM.render(

  
<Provider store = {store}>

  <App />

  </Provider>,
document.getElementById('root'));