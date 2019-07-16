import React from 'react';
import { connect } from 'react-redux'

// const Alert = (props) => props.alerts !==  null && props.alerts.length > 0 && props.alerts.map(alert => (
//   <div className='bg bg-danger'>
//    {alert.msg}
//   </div>
// ))



const Alert = ({alerts}) => {
 if(alerts !== null && alerts.length > 0)
   return (
    <div>

    </div>
   )
}




const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
