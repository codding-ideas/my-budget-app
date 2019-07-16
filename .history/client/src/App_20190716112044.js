import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar';
import Home from './components/Layouts/Home'
import UserRegistration from './components/forms/UserRegistrationForm'

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
           <Route exact path = '/' component = {Home}/>

           <Switch>
              <Route exact path = '/register' component = {user}/>
           </Switch>
        </div>
    </Router>
  );
}

export default App;