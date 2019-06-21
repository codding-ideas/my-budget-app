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
import AllExpenses from './Components/pages/AllExpenses'





class App extends Component {
  render() { 
    
            return (
              <BrowserRouter>
                  <div> 
                    <NavBar/>
                    <Route exact path ='/' component ={HomePage}/>

                    <Route  path = '/register' exact component = {UsersRegistrationForm}/>

                    <Route  path = '/users' exact component = {AllUsers}/>

                    <Route path = '/edit/:id' exact component = {EditUser} />

                    <Route  path = '/user/:id' exact component = {UserDetails}/>

                    <Route  path = '/delete/:id' exact component = {DeleteUser}/>

                    <Route  path = '/addexpenses' exact component = {AddExpenses}/>

                    <Route  path = '/expenses' exact component = {AllExpenses}/>
                  </div>
              </BrowserRouter>
              );
  }
}
 
export default   App;