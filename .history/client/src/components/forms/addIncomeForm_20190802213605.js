import React, { useState} from 'react'
import { connect } from 'react-redux';
import  useForm from 'react-hook-form';
import { Link} from 'react-router-dom'
import  {getMyProfile} from '../../redux/actions/usersAction';


 const Login = (props) => {
  
   //BUILT IN FUNCTIONS FROM HOOK FORMS
const { register, handleSubmit, errors } = useForm();

  //STATE
   const [ formData, setFormData ] = useState({
       amount: '',
       description: ''
   })

 //=======FOR CHANGE METHODS======

 const onChangeamount = (e) => {
    setFormData({...formData, amount: e.target.value})
 }

 const onChangeDescription = (e) => {
     setFormData({...formData, description: e.target.value})
 }
//=================END ON CHANGE METHODS======

  //=========== SUBMIT=======

  const onFormSubmit = e => {
  
//Calling the action creator
    props.createIncome(formData)
  };

  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Sign in</h1>
      <p className="lead"><i className="fas fa-user"></i> Login to your Account</p>
      <form className="form" onSubmit = {handleSubmit(onFormSubmit)}>
        <div className='text-danger'>
        <div className="form-group">
          <input
          type="text" 
          placeholder="Enter Amount" 
          name="amount" 
          onChange = {onChangeamount}
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
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
   </div>
  )
 }

const mapStateToProps = (state) => {
  return {
    auth: state.user
  }
}

 export default connect(mapStateToProps,  {login}) (Login)
