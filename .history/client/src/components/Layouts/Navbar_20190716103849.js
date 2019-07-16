import React from 'react';
import Home from '../Layouts/Home';
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div className = 'navbar'>
       <ul>
           <li>
            <Link to = '/'>Home</Link>
           </li>

           <li>
            <Link to = '/'>Home</Link>
           </li>

           <li>
            <Link to = '/'>Home</Link>
           </li>

           <li>
            <Link to = '/'>Home</Link>
           </li>
       </ul>
  </div>
 )
}

export default Navbar
