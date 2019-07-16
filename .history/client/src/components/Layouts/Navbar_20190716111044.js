import React from 'react';
import Home from '../Layouts/Home';
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div className = 'navbar bg-dark'>
    <h1>
        <Link to='/'>
          <i className='far fa-hand-holding-usd' />- iBudget
        </Link>

        <i class="far fa-hand-holding-usd"></i>
      </h1>
       <ul>
           <li>
            <Link to = '/'>Home</Link>
           </li>

           <li>
            <Link to = '/'>Register</Link>
           </li>

           <li>
            <Link to = '/'>Login</Link>
           </li>
       </ul>
  </div>
 )
}

export default Navbar