import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions/' //This pull or actions in this file. Now action becomes the object
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/HomePage'
import UsersForms from './Components/Forms/UsersRegistration'
import ExpensesForm from './Components/Forms/addExpenses'
import Navbar from './Components/Navbar'

class App extends Component {
  render() { 
   
    return (

      <BrowserRouter>
      <div>
         {/* //always visible */}
         <Navbar/>
         <Route exact path ='/' component ={Home}/>
         <Route exact path ='/register' component ={UsersForms}/>
         <Route exact path ='/addexpenses' component ={ExpensesForm}/>
       
     
      </div>

      </BrowserRouter>
      );
  }
}
 
const mapstateToProps = (state) => {
  return {
    users: state.users
  }
}

 
export default connect(mapstateToProps, actions) (App);