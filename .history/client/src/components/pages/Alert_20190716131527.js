import React from 'react';
import { connect } from 'react-redux'

const Alert = (props) => {


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
