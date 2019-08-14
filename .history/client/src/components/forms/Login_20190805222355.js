import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { login } from '../../actions/auth'

const Login = ({login, isAuthenticated}) => {
   
    const [ formData, setFormData ] = useState({
        
        email: '', 
        password: ''
   
    })

    //DESTRUCTURE FROM OUR STATE - formData
    const { email, password } = formData;

    //ONCHANGE METHOD
    //You have to copy all the previous state values first and the,
    //you decide what to change/update
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

   //SUBMIT METHOD
    const onSubmit = async (e) => {
       e.preventDefault()
          
       //Calling the action to login
       login(email, password)
         

    }

    //Redirect if logged in
     // if(isAuthenticated){
     //     return <Redirect to  ='/dashboard'/>
     // }

    return (
        <Fragment>
        <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into your Account</p>
        <form className="form" onSubmit = {e => onSubmit(e)}>
    
          <div className="form-group">
            <input
             type="email" 
             placeholder="Email Address" 
             value = {email}
             onChange = {e => onChange(e)}
             name="email" />
           
          </div>
          <div className="form-group">
            <input
              type="password"
              value = {password}
              onChange = {e => onChange(e)}
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
         Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </section>
      </Fragment>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   }
// }

export default  (Login)
