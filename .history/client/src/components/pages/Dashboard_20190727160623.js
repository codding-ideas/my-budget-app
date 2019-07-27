import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';

const Dashboard = (props) => {
   console.log('DASHBOARD', props)
 return (
  <div>
     <h1>DASHBOARD</h1>
     <h2>Hello {props.name}</h2>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
