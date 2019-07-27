import React from 'react'
import { connect } from 'react-redux';


const Dashboard = (props) => {
   console.log('DASHBOARD', props)

   const userLoaded = (
    
     return (
        <div>

        </div>
     )
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
