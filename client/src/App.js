import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom'

import NavBar from './Components/Layout/NavBar';
import HomePage from './Components/Layout/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'
import AddExpensesForm from './Components/Forms/AddExpenses';
import Dashboard from './Components/Layout/Dashboard';
import * as actions  from './actions'


class App extends Component {

  componentDidMount () {
    this.props.fetchUsers()
  }
  render() { 
    
            return (
        <BrowserRouter>

            <div>
              <NavBar/>{/* //always visible */}
            
              <Route exact path ='/' component ={HomePage}/>
              <Route exact path ='/register' component ={UsersRegistrationForm}/>
              <Route exact path ='/addexpenses' component ={AddExpensesForm}/>
            
              <Route exact path ='/dashboard' component ={Dashboard}/>
            </div>
        </BrowserRouter>
              );
  }
}
 
export default connect(null, actions) (App);