import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import  logo from '../../images/loading2.svg'
class UserDetails extends Component {
state = {
    UserDetails: null,
    isLoading: true
}

//Fetch to endpoint that returns only a user
componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
    .then((res) => {
       this.setState({
           UserDetails: res.data,
           isLoading: false
       })
    })
}

    render() {
       
  let content = <img src={logo}/>
  
  if(!this.state.isLoading && this.state.UserDetails) {
      return (
          <div className = 'm-5'>
               <h1 className = 'text-danger'>Users Details Page</h1>
               <hr/>
                 <h4>My id is : {this.props.match.params.id}</h4>
                 <h4>First name: {this.state.UserDetails.firstName} </h4>
                 <h4>Last name: {this.state.UserDetails.lastName} </h4>
                 <h4>Email: {this.state.UserDetails.email} </h4>                 <h4>Date Joined: {this.state.UserDetails.date} </h4>
                 <h4>Password: {this.state.UserDetails.password} </h4>
                 <Link to='/users' className='btn btn-success'>Back</Link>
          </div>
      )
  }

  if(!this.state.isLoading && !this.state.UserDetails){
      return (
          <div>
              <p>No Customers found. Please try again</p>
          </div>
      )
  }

  return (
      <div className='m-5 p-5'>{content}</div>
  )
    }
}

export default UserDetails;