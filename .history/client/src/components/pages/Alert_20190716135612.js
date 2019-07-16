import React from 'react';
import { connect } from 'react-redux'

// const Alert = (props) => props.alerts !==  null && props.alerts.length > 0 && props.alerts.map(alert => (
//   <div className='bg bg-danger'>
//    {alert.msg}
//   </div>
// ))



const Alert = (props) => {
  
 return props.alerts !==  null && props.alerts.length > 0 && props.alerts.map((alert) => {
  return (
   <div key = {alert.id} className = 'alert alert'>
      {alert.msg}
   </div>
  )
 })
}




const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
