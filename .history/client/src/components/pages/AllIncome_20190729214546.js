import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { allIncome } from '../../redux/'


const AllUsers = (props) => {

  useEffect(() => {
    props.fetchUsers()
   
  }, [])




 return (
  <div>
      <h1>All Users</h1>
      <h3>The total number of users are {props.users.users.length}</h3>
      {props.users.users.map((user) => {
       return <h2>{user.name}</h2>
      })}
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state.users
 }
}

export default connect(mapStateToProps,{fetchUsers}) (AllUsers)
