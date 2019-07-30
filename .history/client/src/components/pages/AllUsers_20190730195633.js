import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../redux/actions/usersAction'


const AllUsers = (props) => {
  console.log('USERS', props)
  useEffect(() => {
       props.fetchAllUsers()
  }, [])

 return (
  <div>
      
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state
 }
}

export default connect(mapStateToProps,{fetchAllUsers}) (AllUsers)
