import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../redux/actions/usersAction'


const AllUsers = (props) => {
  console.log('USERS', props.users.allUsers)

 return (
  <div>


    <h1>This page is under construction !!</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state
 }
}

export default connect(mapStateToProps,{fetchAllUsers}) (AllUsers)
