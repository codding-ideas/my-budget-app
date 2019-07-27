import React from 'react'
import { connect } from 'react-redux';


const Dashboard = (props) => {
   console.log('DASHBOARD', props)

   
   // const userLoaded = (
   //  {props.user.name}
   //    <div>
   //       <h1>Hello {props.user.name}, welcome to your new page</h1>
   //    </div>
   // )


 return (
  <div>
     {props.user.name}
    
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
