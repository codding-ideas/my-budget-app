import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';

const Dashboard = (props) => {
   console.log('DASHBOARD', props)
 return (
  <div>
     <h1>DASHBOARD</h1>
     <h2>Hello {props.user.name} you are welcome to your new page</h2>
     <h3>Name: {props.name}</h3>
     <h3>Email: {props.email}</h3>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
