import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar'
import Landing from './components/Layouts/Home'
import Register from './components/forms/UserRegistrationForm';
import Login from './components/auth/Login';
import Alert from './components/pages/Alert';
import Dashboard from './components/pages/Dashboard'
import MyAccount from './components/pages/MyAccount';
import Logout from './components/pages/Logout';

import './App.css';



//REDUX
import { Provider } from 'react-redux';
import store from './store'
//AUTH
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './redux/actions/createUserAction' //We have to call this action
//We want to check the user as soon as it runs 

// if(localStorage.token) {
//   setAuthToken(localStorage.token) 
// }


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

              <Route exact path = '/dashboard' component = {Dashboard}/>

              <Route exact path = '/logout' component = {Logout}/>

              <Route exact path = '/logout' component = {Logout}/>
            </Switch>
        </section>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
