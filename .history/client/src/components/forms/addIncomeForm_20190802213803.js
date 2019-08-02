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

 const onChangeAmount = (e) => {
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
          onChange = {onChangeAmount}
          ref = {register({required: true})}
          />
          {errors.amount && 'Email is required'}
        
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange = {onChangeDescription}
            ref = {register({required: true})}
          />
          {errors.description && 'Description is required'}
        </div>
        <input type="submit" className="btn btn-danger" value="Add In" />
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
