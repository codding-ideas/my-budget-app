import React from 'react';
import Home from '../Layouts/Home';
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div>
       <ul>
           <li>
            <Link>Home</Link>
           </li>
       </ul>
  </div>
 )
}

export default Navbar
