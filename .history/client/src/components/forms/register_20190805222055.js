import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
// import { setAlert } from '../../actions/alert'
// import { register } from '../../actions/auth'



const Register = () => {
   
    const [ formData, setFormData ] = useState({
        name: '',
        email: '', 
        password: '',
        password2: '',
        
    })

    //DESTRUCTURE FROM OUR STATE - formData
    const { name, email, password, password2 } = formData;

    //ONCHANGE METHOD
    //You have to copy all the previous state values first and the,
    //you decide what to change/update
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

   //SUBMIT METHOD
    const onSubmit = async (e) => {
       e.preventDefault()
       //make sure password match
       if(password !== password2){

         //calling the action creator
         
           setAlert('Password do not match', 'danger')
       }else {
            console.log('Success')
           

       }
    }

    //Redirected after registered
    // if(isAuthenticated) {
    //   return <Redirect to = '/dashboard'/>
    // }


    return (
        <Fragment>
        <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit = {e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name" 
              value = {name} 
              onChange = {e => onChange(e)}
               />
          </div>
          <div className="form-group">
            <input
             type="email" 
             placeholder="Email Address" 
             value = {email}
             onChange = {e => onChange(e)}
             name="email" />
            <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div className="form-group">
            <input
              type="password"
              value = {password}
              onChange = {e => onChange(e)}
              placeholder="Password"
              name="password"
             
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value = {password2}
              onChange = {e => onChange(e)}
              placeholder="Confirm Password"
              name="password2"
              
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
      </Fragment>
    )
}

{/* const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
} */}

export default connect (mapStateToProps, {setAlert, register}) (Register)
