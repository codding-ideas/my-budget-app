import React from 'react';
import Navbar from './Components/Layout/NavBar';
import Home from './Components/HomePage'


function App() {
  return (
    <div >
      <Home/>
     <Navbar/>
     <a href= "/api/expenses">Expenses</a>
    </div>
  );
}

export default App;
