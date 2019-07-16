import React from 'react';
import Home from '../Layouts/Home';
import { Link } from 'react-router-dom';
import UserRegistration from '../forms/UserRegistrationForm'

const Navbar = () => {
 return (
  <div className = 'navbar bg-dark'>
   <h1>
        <Link to='/'>
          <i className='fas fa-dollar-sign' /> iBudget
        </Link>
      </h1>
       <ul>
        
           <li>
            <Link to = '/'>Home</Link>
           
           </li>

           <li>
            <Link to = '/register'>Register</Link>
           </li>

           <li>
            <Link to = '/'>Login</Link>
           </li>
       </ul>
  </div>
 )
}

export default Navbar
