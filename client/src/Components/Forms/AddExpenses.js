import React, { Component } from 'react';
import useForm from "react-hook-form";
import * as actions  from '../../actions'
import { connect } from 'react-redux';

function UsersRegistration (props) {
    const { register, handleSubmit, reset, errors } = useForm();
   

   const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    props.addExpenses(data)
    alert('Data added successfully!')
    console.log(data)
  };

    return (
        <div className = 'container m-5 pt-5'>
            <h2 className = 'text-muted'>Expenses Form</h2>
           <div class="row"> 
             <div className ='col-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Depositor</label>
          <input
            type="text"
            name="depositor"
            className ='form-control form-control-sm'
            ref={register({ required: true })}
          />
        </div>
        <div className='text-danger'>
        {errors.depositor && "Depositor is required"}
        </div>
        <div>
          <label>Amount</label>
          <input type="text" name="amount" ref={register({ required: true })}  className ='form-control form-control-sm'/>
        </div>
        <div className='text-danger'>
        {errors.amount && "Amount is required"}
        </div>
    
        <div>
          <label>Description</label>
          <input type="text" name="description" ref={register({ required: true })} className ='form-control form-control-sm'/>
        </div>
        <div className='text-danger'>
        {errors.description && "Description is required"}
        </div>
    
        <div className='text-danger'>
        {errors.password && "Password is required"}
        </div>
       <button className ='btn btn-danger mt-2' type ='submit'>Add Expenses</button>
      </form>
     
         </div> 
      </div>
      </div>
    )
}



export default connect(null, actions ) (UsersRegistration);