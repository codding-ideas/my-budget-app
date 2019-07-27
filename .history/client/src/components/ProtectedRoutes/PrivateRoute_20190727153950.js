import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


//We have to accept component = {Dashboard as props}  <Route exact path = '/dashboard' component = {Dashboard}/>


//We will pass a component to be protected as a props into this component
//Appart from passing component as a props we will accept any component passed through so we will use spread operator

//We have to interact with our auth state in the redux for this to work so we will bring the connect method from redux so we have to pass in as a prop because of that we have to destructure any props coming to this function

//This will not return any data but it will return a route passed

const PrivateRoute = ({component: Component, auth, ...rest}) => (

   //Any custom props must be passed to the route as well
   //The render method will check if the user is authenticted or not. That is why it accept props a argument. The props contain all the state from our redux and others
  <Route {...rest} render = {props => !auth.isAuh} 
)

const mapStateToprops = (state) => {
   return {
      auth: state.auth
   }
}

export default connect(mapStateToprops) (PrivateRoute)
