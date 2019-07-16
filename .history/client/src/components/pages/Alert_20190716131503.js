import React from 'react';
import { connect } from 'react-redux'

const Alert = (props) => {
 // //make sure the alert object is not null or empty, since we are using more than one express we will do it like this
  {props.alerts !== null && props.alerts.length > 0 && props.alerts.map((alert) => {
   return (
      <div>
       {alert.message}
      </div>
   )
  })}

 // return (
 //  <div>
 //   <h1>hi</h1>
 //  </div>
 // )
}

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)