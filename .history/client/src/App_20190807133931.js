import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import Navbar from './components/layout/Navbar'
// import Landing from './components/layout/Landing'
 import Register from './components/forms/register';
 import Login from './components/forms/Login';
// //import Login from './components/auth/Login';
import Alert from './components/Layouts/';
// import Dashboard from './components/dashboard/Dashboard';
// import PrivateRoute from './components/routing/PrivateRoute';
// import CreateProfile from './components/profile-forms/CreateProfile'

import Landing from './components/Layouts/Landing'

//REDUX
import { Provider } from 'react-redux';
import store from './store';



const  App = ()  => {

//useffect
// useEffect(() => {
//   store.dispatch(loadUser()) //Load user function is not an action creator so we can call it as this
// }, [])



  return (
    <Provider store = {store}>
    <Router>
       <div className="App">
     
         <Route exact path = '/' component = {Landing}/>
         <Route exact path = '/register' component = {Register}/>
         <Route exact path = '/login' component = {Login}/>
         <section className = 'container'>
             <Alert/>
         </section>
       </div>
     </Router>
     </Provider>
  );
}

export default App;
