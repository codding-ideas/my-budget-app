import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions'
import { connect } from 'react-redux'
import usersRegistrationFormFields from './usersRegistrationFields'



class userRegistration extends Component {
 
    renderFields () {
        console.log('REDUCERS', this.props.formState)
        return (
            <div>
                <Field
                label = 'First Name'
                type = 'text'
                name = 'firstName'
                component = {usersRegistrationFormFields}/>

                 <Field
                label = 'Last Name'
                type = 'text'
                name = 'lastName'
                component = {usersRegistrationFormFields}/>


              <Field
                label = 'Email'
                type = 'text'
                name = 'email'
                component = {usersRegistrationFormFields}/>


               <Field
                label = 'Password'
                type = 'text'
                name = 'password'
                component = {usersRegistrationFormFields}/>
               
            </div>
        )
    }
    render() {
      
        return (
            
            <div className='container m-5'>
                <h2>User's registration</h2>
                <form onSubmit ={this.props.handleSubmit(values => console.log(values))}>
                     {/* //Calling the function */}
                     {this.renderFields()}
                   <button onClick={()=> this.props.createUserss(this.props.formState.form.usersRegistrationForm.values)} className='btn btn-danger' type='submit'>Register</button>
                   </form>
            </div>
        );
    }
}
//======VALIDATION

function validateMethod (values) {
 const errors = {}

 if (!values.firstName) {
    errors.firstName = 'You must provide  first name'
}

   if (!values.lastName) {
       errors.lastName = 'You must provide  last name'
   }


   if (!values.email) {
    errors.email = 'You must provide  your email'
}

if (!values.password) {
    errors.password = 'You must provide  your password'
}


 return errors
}


const mapStateToProps = (state) => {
  return {
     formState: state

  }
}


export default reduxForm({
    validate: validateMethod,
    destroyOnUnmount: true,
    form: 'usersRegistrationForm'
}) (connect(mapStateToProps, actions) (userRegistration));



