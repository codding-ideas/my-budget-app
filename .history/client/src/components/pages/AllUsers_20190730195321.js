import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';



const AllUsers = (props) => {

  useEffect(() => {
   
   
  }, [])




 return (
  <div>
      fff
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state.users
 }
}

export default connect(mapStateToProps,{}) (AllUsers)
