import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar';
import Home from './components/Layouts/Home'
import UserRegistration from './components/forms/UserRegistrationForm';
import Login from './components/auth/Login'

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
           <Route exact path = '/' component = {Home}/>

           <Switch>
              <Route exact path = '/register' component = {UserRegistration}/>
              <Route exact path = '/login'/>

           </Switch>
        </div>
    </Router>
  );
}

export default App;
