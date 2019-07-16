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
  alert: state.a
 }
}
export default connect() (Alert)
