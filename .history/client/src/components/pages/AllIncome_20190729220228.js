import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllIncome } from '../../redux/actions/incomeAction'


const AllIncome = (props) => {

 console.log('Fetch all income' ,props.income.amount)
  useEffect(() => {
    props.fetchAllIncome()
   
  }, [])




 return (
  <div>

      <h1>All Users {props.income.length}</h1>
      <h3>The total number of users are </h3>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  income: state.fetchAllIncome
 }
}

export default connect(mapStateToProps,{fetchAllIncome}) (AllIncome)
