import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions/' //This pull or actions in this file. Now action becomes the object

import NavBar from './Components/Layout/NavBar';
import HomePage from './Components/Layout/HomePage';
import UsersRegistrationForm from './Components/Forms/UsersRegistration'

import AddExpensesForm from './Components/Forms/AddExpenses'


class App extends Component {
  render() { 
   
    return (

     <div>
       <AddExpensesForm/>
       <UsersRegistrationForm/>
       <NavBar/>
       <HomePage/>
     </div>
      );
  }
}
 


 
export default  App;