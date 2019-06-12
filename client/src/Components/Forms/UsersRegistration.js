import React  from 'react';
import { connect } from 'react-redux';
import useForm from "react-hook-form";

import * as actions  from '../../actions'

const  UsersRegistration = (props) => {

  //destructring methods from react-hook-form
    const { register, handleSubmit, reset, errors } = useForm();
   console.log('FORM COMP', props)
    //All the input data are are passed to the argument passed to the onsubmit function
   const onSubmit = (data, e) => {
     props.createUserss(data)
    e.target.reset(); // reset after form submit
   
    
    alert('Data added successfully!')
    
  };

    return (
        <div className = 'container m-5 pt-5'>
            <h2 className = 'text-muted'>User's Registration Form</h2>
           <div class="row"> 
             <div className ='col-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            className ='form-control form-control-sm'
            ref={register({ required: true })}
          />
        </div>
        <div className='text-danger'>
        {errors.firstName && "First name is required"}
        </div>
        <div>
          <label>Last name</label>
          <input type="text" name="lastName" ref={register({ required: true })}  className ='form-control form-control-sm'/>
        </div>
        <div className='text-danger'>
        {errors.lastName && "Last name is required"}
        </div>
    
        <div>
          <label>email</label>
          <input type="text" name="email" ref={register({ required: true })} className ='form-control form-control-sm'/>
        </div>
        <div className='text-danger'>
        {errors.email && "Email is required"}
        </div>
    
        <div>
          <label>password</label>
          <input type="text" name="password" ref={register({ required: true })}className ='form-control form-control-sm' />
        </div>
        <div className='text-danger'>
        {errors.password && "Password is required"}
        </div>
       <button className ='btn btn-success mt-2' type ='submit'>Register</button>
      </form>
     
         </div> 

         <div className ='col-6'>
         <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date joined</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
 {props.allUsers.map((user) => {
   return <tr key={user.id}>
   <th scope="row">{user.date}</th>
   <td>{user.firstName}</td>
   <td>{user.lastName}</td>
   <td>{user.email}</td>
 </tr>
 })}
  </tbody>
</table>
         </div>
      </div>
      </div>
    )
}


const mapstateToProps = (state) => {
    return {
       allUsers:  state.users
    }
}

export default connect(mapstateToProps, actions) (UsersRegistration);