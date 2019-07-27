import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';

const Dashboard = (props) => {
   console.log('DASHBOARD', props)

   const userLoaded = (
      <div>
         <h1>Hello {props.user.name}, welcome to your new page</h1>
      </div>
   )


 return (
  <div>
     {props.user.name ? <Dashboard/>: ''}
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
