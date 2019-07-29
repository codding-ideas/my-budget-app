import React, { useState} from 'react'
import { connect } from 'react-redux';
import  useForm from 'react-hook-form';
import { Link, Redirect} from 'react-router-dom';
import  {registerUser} from '../../redux/actions/usersAction';
import  {setAlert} from '../../redux/actions/alertAction';


 const AddIncome = (props) => {


  //BUILT IN FUNCTIONS FROM HOOK FORMS
const {handleSubmit, reset, errors } = useForm();

  //STATE
   const [ formData, setFormData ] = useState({
       description: '',
       amount: ''   
   })

 //=======FOR CHANGE METHODS======
 const onChangeDescription = (e) => {
    setFormData({...formData, description: e.target.value})
 }

 const onChangeAmount = (e) => {
    setFormData({...formData, amount: e.target.value})
 }


  //=========== SUBMIT=======

  const onFormSubmit = e => {
  
//Calling the action creator
      reset()
     
     }
     
  };




  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Add Income</h1>
      <p className="lead"><i className="fas fa-user"></i> Create income </p>
      <form className="form" onSubmit = {handleSubmit(onFormSubmit)}>
        <div className='text-danger'>
         <div className="form-group">
          <input
           type="text"
            placeholder="Description"
            name="description" 
            onChange = {onChangeDescription}
            // ref = {register({required: true})}
            />
        {errors.description && 'Description is required'}
        </div>

        <div className="form-group">
          <input
          type="text" 
          placeholder="Enter your income" 
          name="income" 
          onChange = {onChangeAmount}
         // ref = {register({required: true})}
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
           // ref = {register({required: true})}
          />
          {errors.password && 'Password is required'}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="confirm password"
            name="password2"
            onChange = {onChangePassword2}
           // ref = {register({required: true})}
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
    auth: state
  }
}

 export default connect(mapStateToProps,  {registerUser, setAlert}) (AddIncome)
