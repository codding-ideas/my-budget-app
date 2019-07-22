import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout
import Register from './components/forms/UserRegistrationForm';
import Login from './components/auth/Login';
import Alert from './components/pages/Alert';


//REDUX
import { Provider } from 'react-redux';
import store from './store'
//AUTH
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './redux/actions/auth' //We have to call this action
//We want to check the user as soon as it runs 
if(localStorage.token) {
  setAuthToken(localStorage.token) 
}


const  App = ()  => {

//useffect
useEffect(() => {
  store.dispatch(loadUser()) //Load user function is not an action creator so we can call it as this
}, [])

  return (
    <Provider store = {store}>
   <Router>
      <div className="App">
      <Navbar/>
        <Route exact path = '/' component = {Landing}/>
        <section className = 'container'>
            <Alert/>
            <Switch>
              <Route exact path = '/register' component = {Register}/>
              <Route exact path = '/login' component = {Login}/>
            </Switch>
        </section>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
