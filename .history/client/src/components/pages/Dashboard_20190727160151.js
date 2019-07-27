import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';

const Dashboard = () => {
 return (
  <div>
     <h1>You have logged in</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth
   }
}

export default Dashboard
