import React from 'react';


const Navbar = () => {
    return (
        <div>
         <nav class="navbar bg-dark">
      <h1>
        <a href="index.html"><i class="fas fa-code"></i> iBudget</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Dashboard</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
        </div>
    )
}

export default Navbar
