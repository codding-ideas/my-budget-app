import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import 


const UserMoreInfo = (props) => {
console.log(props)
  

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
