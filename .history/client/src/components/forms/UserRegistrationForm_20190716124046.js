import React, { useState, Fragment} from 'react'
import { connect } from 'react-redux';
import  useForm from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom'
import  {createUsers, se} from '../../redux/actions/userRegisterAction';


 const UsersRegistration = (props) => {
  //STATE
   const [ formData, setFormData ] = useState({
       name: '',
       email: '',
       password: '',
       password2: ''
   })

 //=======FOR CHANGE METHODS======
 const onChangeName = (e) => {
    setFormData({...formData, name: e.target.value})
 }

 const onChangeEmail = (e) => {
    setFormData({...formData, email: e.target.value})
 }

 const onChangePassword = (e) => {
     setFormData({...formData, password: e.target.value})
 }

 const onChangePassword2 = (e) => {
  setFormData({...formData, password2: e.target.value})
}
//=================END ON CHANGE METHODS======

  //=========== SUBMIT=======

  const onFormSubmit = e => {
  
//Calling the action creator
   

    if(formData.password !== formData.password2){
      console.log('Password do not match')
    }else {
      props.createUsers(formData);
      console.log('Registartion was successful')
    }

   
  };

//BUILT IN FUNCTIONS FROM HOOK FORMS
const { register, handleSubmit, reset, errors } = useForm();
  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
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
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>

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

        <div className="form-group">
          <input
            type="password"
            placeholder="confirm password"
            name="password2"
            onChange = {onChangePassword2}
            ref = {register({required: true})}
          />
          {errors.password2 && 'Password is required'}
        </div>

        <input type="submit" className="btn btn-danger" value="Register" />
       </div>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
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
