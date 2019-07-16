import React, { useState, Fragment} from 'react'
import { connect } from 'react-redux';
import  useForm from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom'
import  {createUsers} from '../../redux/actions/userRegisterAction';


 const UsersRegistration = (props) => {
  //STATE
   const [ formData, setFormData ] = useState({
       email: '',
       password: ''
   })

 //=======FOR CHANGE METHODS======

 const onChangeEmail = (e) => {
    setFormData({...formData, email: e.target.value})
 }

 const onChangePassword = (e) => {
     setFormData({...formData, password: e.target.value})
 }
//=================END ON CHANGE METHODS======

  //=========== SUBMIT=======

  const onFormSubmit = e => {
  
//Calling the action creator
    props.createUsers(formData)
  };

//BUILT IN FUNCTIONS FROM HOOK FORMS
const { register, handleSubmit, reset, errors } = useForm();
  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Sign in</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {handleSubmit(onFormSubmit)}>
        <div className='text-danger'>
         <div className="form-group">
          <input
           type="text"
            placeholder="Name"
            name="name" 
            onChange = {onChangeName}
             ref = {register({required: true})}
            />
        {errors.name && 'Name is required'}
        </div>

        <div className="form-group">
          <input
          type="email" 
          placeholder="Email Address" 
          name="email" 
          onChange = {onChangeEmail}
          ref = {register({required: true})}
          />
          {errors.email && 'Email is required'}
        
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange = {onChangePassword}
            ref = {register({required: true})}
          />
          {errors.password && 'Password is required'}
        </div>
        <input type="submit" className="btn btn-danger" value="Login" />
       </div>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Login</Link>
      </p>
    </section>
   </div>
  )
 }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

 export default connect(mapStateToProps,  {createUsers}) (UsersRegistration)
