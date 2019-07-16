import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar';
import Home from './components/Layouts/Home'
import UserRegistration from './components/forms/UserRegistrationForm';
import Login from './components/auth/Login';
import Alerts from './components/pages/Alert'

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
            
           <Route exact path = '/' component = {Home}/>
        <section className ='container'>
         
           <Switch>
           
              <Route exact path = '/register' component = {UserRegistration}/>
              <Route exact path = '/login' component = {Login}/>

           </Switch>
           </section>
        </div>
    </Router>
  );
}

export default App;
