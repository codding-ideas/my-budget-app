import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/actions/FetchUsersAction'


const AllUsers = (props) => {

  useEffect(() => {
   
   
  }, [])




 return (
  <div>
      
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state.users
 }
}

export default connect(mapStateToProps,{fetchUsers}) (AllUsers)
