import React, { Component } from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/pages/NavBar';
import HomePage from './Components/pages/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'
import AllUsers from './Components/pages/AllUsers';
import EditUser from './Components/pages/EditUser';
import UserDetails from './Components/pages/UserDetails';
import DeleteUser from './Components/pages/DeleteUser';
import AddExpenses from './Components/Forms/AddExpenses';
import AllExpenses from './Components/pages/AllExpenses';
import Dashboard from './Components/pages/Dashboard'





class App extends Component {
  render() { 
    
            return (
              <BrowserRouter>
                  <div> 
                   
                   
                  </div>
              </BrowserRouter>
              );
  }
}
 
export default   App;