import React, {Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/usersAction'


const Navbar = (props) => {


//Creating two navbars for authenticated user and guest user

const authLinks = (
  <div className ='b'>
  <ul>
   <li>
     <Link to='/account'>My Account</Link>
   </li>

   <li>
     <Link to='/dashboard'>Dashboard</Link>
   </li>

   <li>
     <a onClick = {props.logout} href = '/'>
     <span className='hide-sm'>Logout</span>
     </a>
   </li>
  </ul>
  </div>
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

// if(!props.navLogin.isAuthenticated){
//  return( <Redirect to ='/'/>)
// }

return (
  <nav className='navbar bg-dark'>
    <h1>
         <Link to='/'>
           <i className='fas fa-dollar-sign' /> iBudget
         </Link>
       </h1>

       {props.loginUser.isAuthenticated ? authLinks: guestLinks}
  </nav>
)
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.users
  }
}

export default connect(mapStateToProps, { logout}) (Navbar)