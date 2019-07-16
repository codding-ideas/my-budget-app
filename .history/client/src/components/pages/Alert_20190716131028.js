import React from 'react';
import { connect } from 'react-redux'

const Alert = () => {
 //make sure the alert object is not null or empty, since we are using more than one express we will do it like this
 

 
}

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
