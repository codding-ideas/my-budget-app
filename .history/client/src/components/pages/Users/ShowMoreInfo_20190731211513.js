import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../redux/actions/usersAction'


const U = (props) => {
  console.log('USERS', props.users.allUsers)
  useEffect(() => {
       props.fetchAllUsers()
  }, [])

 return (
  <div>
      {props.users ? 
      <div>
         {props.users.allUsers.map((user) => {
           return <div key ='user_id'>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <img src ={user.avatar} style ={{width: 200}}></img>
                  <p>
                  <button className ='btn btn-primary'>Contact me</button>
                  </p>
                  <hr/>
                </div>
         })}
      </div>: 'No Users found...'
      
    }
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  users: state.user
 }
}

export default connect(mapStateToProps,{fetchAllUsers}) (AllUsers)
