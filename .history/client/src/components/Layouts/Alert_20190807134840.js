import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({alerts}) => 

const mapStateToProps = (state) => {
 return {
  alerts: state.alert
 }
}


export default (Alert);
