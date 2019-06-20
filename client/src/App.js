import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/pages/NavBar';
import HomePage from './Components/pages/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'

import Dashboard from './Components/pages/Dashboard';





class App extends Component {
  render() { 
    
            return (
              <BrowserRouter>
                  <div> 
                    <NavBar/>
                    <Route exact path ='/' component ={HomePage}/>
              
                  </div>
              </BrowserRouter>
              );
  }
}
 
export default   App;