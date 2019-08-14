import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({alerts}) => {
 console.log('ALERT', props)
 return(
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
 )
}

const mapStateToProps = (state) => {
 return {
  alerts: state.alert
 }
}


export default (Alert);
