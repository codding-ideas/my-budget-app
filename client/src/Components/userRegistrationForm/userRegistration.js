import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
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
        return (
            <div>
                <Field
                type = 'text'
                name = 'firstName'
                component = {usersRegistrationFormFields}/>
            </div>
        )
    }
    render() {
       
        return (
            
            <div>
                <h1>Form</h1>
                <form onSubmit ={this.props.handleSubmit(values => console.log(values))}>
                     {/* //Calling the function */}
                     {this.renderFields()}
                   <button type='submit'>Register</button>
                   </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'Users-Form'
}) (userRegistration);