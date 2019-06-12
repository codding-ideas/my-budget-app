import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions/' //This pull or actions in this file. Now action becomes the object
import {BrowserRouter, Route } from 'react-router-dom'

import NavBar from './Components/Layout/NavBar';
import HomePage from './Components/Layout/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'

import AddExpensesForm from './Components/Forms/AddExpenses'


class App extends Component {
  render() { 
   
    return (
<BrowserRouter>
    <div>
      <NavBar/>{/* //always visible */}

      <Route exact path ='/' component ={HomePage}/>
      <Route exact path ='/register' component ={UsersRegistrationForm}/>
      <Route exact path ='/addexpenses' component ={AddExpensesForm}/>
    </div>
</BrowserRouter>
      );
  }
}
 
export default  App;