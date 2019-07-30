import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';



const AllUsers = (props) => {

  console.log('USERS', props)
  useEffect(() => {
   
   
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

export default connect(mapStateToProps,{}) (AllUsers)
