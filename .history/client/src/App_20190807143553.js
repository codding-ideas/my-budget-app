import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Layouts/Navbar'

// import Landing from './components/layout/Landing'
 import Register from './components/forms/register';
 import Login from './components/forms/Login';
// //import Login from './components/auth/Login';
import Alert from './components/Layouts/Alert';
import Dashboard from './components/';
// import PrivateRoute from './components/routing/PrivateRoute';
// import CreateProfile from './components/profile-forms/CreateProfile'

import Landing from './components/Layouts/Landing'

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/actions/auth'



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

            </Switch>
        </section>
      </div>
     </Router>
     </Provider>
  );
}

export default App;
