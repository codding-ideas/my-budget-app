import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = (props) => {
 console.log('ALERT', props)
 return(
  <div>
   <h1>Alert</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  alerts: state
 }
}


export default (Alert);
