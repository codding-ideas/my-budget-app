import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { allIncome } from '../../redux/actions/incomeAction'


const AllUsers = (props) => {

  useEffect(() => {
    props.allIncome()
   
  }, [])




 return (
  <div>
      <h1>All Users</h1>
      <h3>The total number of users are </h3>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  inc: state.users
 }
}

export default connect(mapStateToProps,{fetchUsers}) (AllUsers)
