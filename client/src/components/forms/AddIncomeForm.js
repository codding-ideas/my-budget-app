import React, { useState} from 'react'
import { connect } from 'react-redux';
import  useForm from 'react-hook-form';
import { Link} from 'react-router-dom'
import  {createIncome} from '../../redux/actions/usersAction';
import  {getMyProfile} from '../../redux/actions/usersAction';
import store from '../../store'


 const AddIncome = (props) => {
 useState(() => {
   store.dispatch(getMyProfile())
   props.createIncome()
 })

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
    props.getMyProfile()
  };

  return (
   <div>
     <section className="container">
      
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
        <input type="submit" className="btn btn-danger" value="Add Income" />
       </div>
      </form>
    </section>
   </div>
  )
 }

const mapStateToProps = (state) => {
  return {
    auth: state.user
  }
}

 export default connect(mapStateToProps,  {createIncome, getMyProfile}) (AddIncome)
