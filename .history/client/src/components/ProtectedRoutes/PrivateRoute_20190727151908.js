import React from 'react'
import PropTypes from 'prop-types'


//We have to accept component = {Dashboard as props}  <Route exact path = '/dashboard' component = {Dashboard}/>


//We will pass a component to be protected as a props into this component
//Appart from passing component as a props we 
const PrivateRoute = (props) => {
 return (
  <div>
     <h1>Dashboard 2</h1>
  </div>
 )
}



export default PrivateRoute
