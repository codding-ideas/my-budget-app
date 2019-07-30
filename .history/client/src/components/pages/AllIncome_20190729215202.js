import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllIncome } from '../../redux/actions/incomeAction'


const AllIncome = (props) => {

 console.log( ,props.income)
  useEffect(() => {
    props.fetchAllIncome()
   
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
  income: state
 }
}

export default connect(mapStateToProps,{fetchAllIncome}) (AllIncome)
