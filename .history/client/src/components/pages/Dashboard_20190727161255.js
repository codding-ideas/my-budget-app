import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';

const Dashboard = (props) => {
   console.log('DASHBOARD', props)

   const userLoaded = (
      <div>
         <h1>Hello {props.user.name}</h1>
      </div>
   )
 return (
  <div>
     <h1>You have logged in</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)