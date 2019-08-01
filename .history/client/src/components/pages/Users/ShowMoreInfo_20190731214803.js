import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { userShowMoreInfo } from '../../../redux/actions/usersAction'


const UserMoreInfo = (props) => {
console.log(props)
   useEffect(( => {
    props.userShowMoreInfo()
   }))

 return (
  <div>
     <h1>Show more</h1>
  </div>
 )
}

const maptStateToProps = (state) => {
 return {
  user: state
 }
}

export default connect(maptStateToProps, null) (UserMoreInfo)
