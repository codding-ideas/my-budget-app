import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import Navbar from './components/layout/Navbar'
// import Landing from './components/layout/Landing'
// import Register from './components/auth/Register';
// //import Login from './components/auth/Login';
// import Alert from './components/layout/Alert';
// import Dashboard from './components/dashboard/Dashboard';
// import PrivateRoute from './components/routing/PrivateRoute';
// import CreateProfile from './components/profile-forms/CreateProfile'



//REDUX
import { Provider } from 'react-redux';
import store from './store';



const  App = ()  => {

//useffect
// useEffect(() => {
//   store.dispatch(loadUser()) //Load user function is not an action creator so we can call it as this
// }, [])



  return (
    <div>
      <h1>APP</h1>
    </div>
  );
}

export default App;
