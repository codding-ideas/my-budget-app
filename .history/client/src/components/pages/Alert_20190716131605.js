import React from 'react';
import { connect } from 'react-redux'

const Alert = (props) => {
{props.alerts !==}
}

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
