import React from 'react';
import { connect } from 'react-redux'

const Alert = () => {
 return (
  <div>
   
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  alert: state.alerts
 }
}
export default connect() (Alert)
