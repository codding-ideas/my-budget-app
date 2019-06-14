import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/pages/NavBar';
import HomePage from './Components/pages/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'
import AddExpensesForm from './Components/Forms/AddExpenses';
import Dashboard from './Components/pages/Dashboard';
import * as actions  from './redux/actions'
import UserDetails from './Components/pages/UserDetails'
import AllUsers from './Components/pages/AllUsers'


class App extends Component {
  render() { 
    
            return (
              <BrowserRouter>
                  <div> 
                    <NavBar/>
                    <Route exact path ='/' component ={HomePage}/>
                    <Route exact path ='/register' component ={UsersRegistrationForm}/>
                    <Route exact path ='/addexpenses' component ={AddExpensesForm}/>
                    <Route exact path ='/dashboard' component ={Dashboard}/>
                    <Route path ='/users/:id' exact component = {UserDetails}/>
                    <Route path = '/users' exact component ={AllUsers}/>
                  </div>
              </BrowserRouter>
              );
  }
}
 
export default connect(null, actions) (App);