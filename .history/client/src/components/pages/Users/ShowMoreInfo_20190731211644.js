import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../redux/actions/usersAction'


const UserMoreInfo = (props) => {
  console.log('USERS', props.users.allUsers)
  

 return (
  <div>
     <h1>Show more</h1>
  </div>
 )
}



export default  UserMoreInfo
