import React from 'react'
import { connect } from 'react-redux';


const Dashboard = (props) => {
   console.log('DASHBOARD', props)
   
   if(props.user.name)
   const userLoaded = (

      
      <div>
         <h1>Hello {props.user.name}, welcome to your new page</h1>
      </div>
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