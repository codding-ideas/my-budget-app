import React from 'react';
import { connect } from 'react-redux'

const Alert = (props) => alerts !==  null && alerts.length > 0 && alerts.map(alert => (
  <div className='bg bg-danger'>
   {alert.msg}
  </div>
))




const mapStateToProps = (state) => {
 return {
  alerts: state.alerts
 }
}
export default connect(mapStateToProps) (Alert)