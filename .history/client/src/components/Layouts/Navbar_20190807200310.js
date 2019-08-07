import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../../redux/actions/auth';

const Navbar = (props) => {
  const authLinks = (
    <ul>
       <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />
          <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={props.logout} href='/'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

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
  );
 console.log('From Navbar', props.auth)

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-hryvnia' /> iBudget
        </Link>
      </h1>
      {props.auth ? (<Fragment>{authLinks}</Fragment>): (<Fragment>{guestLinks}</Fragment>)
      }
    </nav>
  );
};


const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
