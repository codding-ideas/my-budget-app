import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


//We have to accept component = {Dashboard as props}  <Route exact path = '/dashboard' component = {Dashboard}/>


//We will pass a component to be protected as a props into this component
//Appart from passing component as a props we will accept any component passed through so we will use spread operator

//We have to interact with our auth state in the redux for this to work so we will bring the connect method from redux so we have to pass in as a prop because of that we have to destructure any props coming to this function


const PrivateRoute = ({component: }) => {
 return (
  <div>
     <h1>Dashboard 2</h1>
  </div>
 )
}

const mapStateToprops = (state) => {
   return {
      auth: state.auth
   }
}

export default connect(mapStateToprops) (PrivateRoute)
