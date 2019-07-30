import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar'
import Landing from './components/Layouts/Home'
import Register from './components/forms/UserRegistrationForm';
import Login from './components/forms/Login';
import Alert from './components/pages/Alert';
import MyAccount from './components/pages/MyAccount';
import Logout from './components/pages/Logout';
import PrivateRoute from './components/ProtectedRoutes/PrivateRoute'
import Dashboard from './components/pages/Dashboard';
import setAuthToken from './utils/setAuthToken';
import {getMyProfile } from './redux/actions/auth';

//Income
import AddIncome from './components/forms/addIncome'
import './App.css';




//REDUX
import { Provider } from 'react-redux';
import store from './store'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App = ()  => {
  useEffect(() => {
    store.dispatch(getMyProfile())
  })
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

              <PrivateRoute exact path = '/dashboard' component = {Dashboard}/>

              
              <Route exact path = '/logout' component = {Logout}/>

              <Route exact path = '/account' component = {MyAccount}/>


              <Route exact path = '/addIncome' component = {AddIncome}/>
            </Switch>
        </section>
      </div>
    </Router>
    </Provider>
  );
}

export default  App;
