import React, { Component } from 'react';
import axios from 'axios'


class UserDetails extends Component {
state = {
    UserDetails: {}
}

//Fetch to endpoint that returns only a user
componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)

    
    .then((res) => {
       this.setState({
           UserDetails: res.data
       })
    })
}
    render() {
        console.log(this.state.UserDetails)
        return (
            <div className = 'm-5 p-5'>
                <h1>Users Details Page</h1>
                <h3>My id is : {this.props.match.params.id}</h3>
                <h4>First name: </h4>
            </div>
        );
    }
}

export default UserDetails;