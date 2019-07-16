import React from 'react';
import { connect } from 'react-redux'

const Alert = ({alerts}) => alerts !== && alerts.leng

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
