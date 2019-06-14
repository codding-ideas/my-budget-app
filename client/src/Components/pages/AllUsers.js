import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AllUsers extends Component {
   state = {
       allUsers: []
   }

   //Fetching all users
   componentDidMount() {
      axios.get(`api/users/`)
      .then((res) => {
          this.setState({
              allUsers: res.data
          })
      })
   }

    render() {
        console.log('All', this.state)
        return (
        <div className ='p-5 m-5'>
                <h1>All Customers</h1>
                <div className ='col-12'>
          <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">info</th>
                </tr>
            </thead>
            <tbody>
             
            {this.state.allUsers.map((user) => {
            return <tr key={user._id}>
            <th scope="row">{user.firstName}</th>
            <td>{user.lastName}</td>
            <td><Link to ={`/users/${user._id}`}>Details</Link></td>
            </tr>
                 })}

            </tbody>
         </table>
         </div>
      </div>
        );
    }
}

export default AllUsers;