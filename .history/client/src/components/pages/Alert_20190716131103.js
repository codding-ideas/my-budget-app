import React from 'react';
import { connect } from 'react-redux'

const Alert = (props) => {
 //make sure the alert object is not null or empty, since we are using more than one express we will do it like this
  if(props.alerts !== null && )
}

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)