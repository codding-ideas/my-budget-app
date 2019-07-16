import React from 'react';
import { connect } from 'react-redux'

const Alert = () => {
 //make sure the alert object is not null or 
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
