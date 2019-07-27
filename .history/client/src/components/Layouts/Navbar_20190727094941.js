import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout }


const Navbar = (props) => {
  console.log('Props from Navbar', props.navLogin)
//  return (
//   <div className = 'navbar bg-dark'>
//    <h1>
//         <Link to='/'>
//           <i className='fas fa-dollar-sign' /> iBudget
//         </Link>
//       </h1>
//        <ul>
        
//            <li>
//             <Link to = '/'>Home</Link>
           
//            </li>

//            <li>
//             <Link to = '/register'>Register</Link>
//            </li>

//            <li>
//             <Link to = '/login'>Login</Link>
//            </li>
//        </ul>
//   </div>
//  )


//Creating two navbars for authenticated user and guest user

const authLinks = (
  <ul>
   <li>
     <Link to='/account'>My Account</Link>
   </li>

   <li>
     <Link to='/dashboard'>Dashboard</Link>
   </li>

   <li>
     <Link to='/logout'>Logout</Link>
   </li>
  </ul>
)

//GUEST NAVBAR
const guestLinks = (
  <ul>
   <li>
     <Link to='/'>Home</Link>
   </li>

   <li>
     <Link to='/register'>Register</Link>
   </li>

   <li>
     <Link to='/login'>Login</Link>
   </li>
  </ul>
)

return (
  <nav className='navbar bg-dark'>
    <h1>
         <Link to='/'>
           <i className='fas fa-dollar-sign' /> iBudget
         </Link>
       </h1>

       {!props.navLogin.loading && props.navLogin.isAuthenticated ? authLinks: guestLinks}
  </nav>
)
}

const mapStateToProps = (state) => {
  return {
    navLogin: state.auth
  }
}

export default connect(mapStateToProps) (Navbar)
