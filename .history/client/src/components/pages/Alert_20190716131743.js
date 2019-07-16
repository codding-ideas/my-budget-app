import React from 'react';
import { connect } from 'react-redux'

const Alert = ({alerts}) => alerts !==  null && alerts.length > 0 && alerts.map()

const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)
