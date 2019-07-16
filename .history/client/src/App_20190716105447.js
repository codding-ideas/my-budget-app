import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar';
import Home from './components/Layouts'

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
        </div>
    </Router>
  );
}

export default App;
