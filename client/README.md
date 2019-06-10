## REDUX FORM PART 0NE

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
//It has methods to make our life easier. This method helps our form to communicate to our redux store
//The field is use to render any traditional hrml input types. The Field is a component. We pass in props to the Field to tell it how to render itself

//To be able to submit we need to wrap our form with a form tag and in the form tag we place onSubmit

//this.props.handleSubmit is provided to us by redux after we connected our form to the this component using reduxForm

//The handlesubmit accept a callback we defined and it will call when a user submit the form


class userRegistration extends Component {
    render() {
        console.log(this.props)
        return (
            
            <div>
                <h1>Form</h1>
                <form onSubmit ={this.props.handleSubmit(values => console.log(values))}>
                <Field
                type = 'text'
                name = 'firstname'
                component = 'checkbox'
                />
                   <button type='submit'>Register</button>
                   </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Users-Form'
}) (userRegistration);


================ 1 ====================

import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import usersReducers from './users';


export default combineReducers({
users: usersReducers,
form: reduxForm
})
===================================

============== 2 ==============

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions'
import { connect } from 'react-redux'
//It has methods to make our life easier. This method helps our form to communicate to our redux store
//The field is use to render any traditional hrml input types. The Field is a component. We pass in props to the Field to tell it how to render itself

//To be able to submit we need to wrap our form with a form tag and in the form tag we place onSubmit

//this.props.handleSubmit is provided to us by redux after we connected our form to the this component using reduxForm

//The handlesubmit accept a callback we defined and it will call when a user submit the form

//In the field tag we have a prop call component which only render input fields so if we want to display checkbox we have to define our custom field input

//Let's create a file that will hold our input fields

//Create a function to render the fields imported

//IMPORT THE FIELDS CREATED
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
            
            <div className='container'>
                <h1>Form v2</h1>
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

//This take a single argument called values.
//This values contains all the values from our form.
//We have to return object from this function
//If the return object is empty redux-forms assunmes the values are valid but if the error object contains errors redux-form will stop the submittng

//So we have inspect the values passed in as argument if it contains errors

//Next how to display the error to the user?
//Errors properties are found under meta inside our field componet so we have to destructure meta
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



// export default reduxForm({
//     form: 'change_password_form',
//     validate
//   })(connect(select, actions)(ChangePassword))

=======================================

============3================
//Fields contains logic to render a single label and text input


import React from 'react';

//Since this method is rendering by Field tag we have bunch of method on this function so we can destructure what we want, the input contains important method that we want to pass to the input field so we will use a spread to add all to it .  <input {...input} /> this will prevent us writting this onBlur ={input.onBlur}
export default ({input, label, meta: {error, touched}}) => {
    //At this point we can customise our field for example styling
    //The meta helps us to display errors back to the user. The meta is an object that holds all errors concerining the form values

    return (
        <div>
            {/* //We want the parent to component to provide the label */}
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}}/>
            <div className='text-danger' style={{marginBottom:'20px'}}>
            {touched && error }
            </div>
            
        </div>
    )
}

==================================

==============4===============
//We want this action to be called with all the values from our form 


export  const createUserss = (values) => {
    return function(dispatc) {
        axios.post('/api/users', values)
        .then((res) => {
            console.log(res)
            return dispatc({
                type: 'CTREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }

