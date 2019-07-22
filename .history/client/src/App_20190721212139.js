import React, {useEffect, Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar';
import Home from './components/Layouts/Home'
import UserRegistration from './components/forms/UserRegistrationForm';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import Alerts from './components/pages/Alert';
import store from './store'


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import { composeWithDevTools} from 'redux-devtools-extension';
// import rootReducer from './redux/reducers';

//Runing the userloaded method

import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth' 



//========LOADE USER METHOD FROM ACTION===============
if(localStorage.token){
  setAuthToken(localStorage.token)
}


function App() {

  useEffect(()=> {
    store.dispatch(loadUser())
  }, [])
  return (

   <Provider store = {store}>
    <Router>
      <Fragment>
        <div className="App">
            <Navbar/>
            
           <Route exact path = '/' component = {Home}/>
        <section className ='container'>
          <Alerts/>
           <Switch>
           
              <Route exact path = '/register' component = {UserRegistration}/>
              <Route exact path = '/login' component = {Login}/>

           </Switch>
           </section>
        </div>
      </Fragment>
    </Router>

    </Provider> 
  );
}

export default App;
