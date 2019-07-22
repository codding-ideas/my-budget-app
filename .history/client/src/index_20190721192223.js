import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers'
import './index.css';
import App from './App';

//Runing the userloaded method
import  { loadUser } from  './redux/actions/auth';
import setAuthToken from './utils/setAuthToken'

//========LOADE USER METHOD FROM ACTION===============
if(localStorage.token){
  setAuthToken(localStorage.token)
}


// const store = createStore(users, composeWithDevTools(applyMiddleware(reduxThunk)) )
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

ReactDOM.render(

  useEffect(() => {
    store.dispatch(loadUser())
  })
<Provider store = {store}>
   
  <App />

  </Provider>,
document.getElementById('root'));