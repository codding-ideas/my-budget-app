import React from 'react'
import { connect } from 'react-redux';


const Dashboard = (props) => {
   console.log('DASHBOARD', props)

   const userLoaded = (
     if(!props.user.name) 
     
   )


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
