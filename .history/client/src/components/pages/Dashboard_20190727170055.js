import React from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction'

const Dashboard = (props) => {
   console.log('DASHBOARD', props)




 return (
  <div>
    <h1>MY DASH</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
