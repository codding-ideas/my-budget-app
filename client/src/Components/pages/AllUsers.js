
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

 class AllUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {allUsers: []};
    }

    componentDidMount() {
        axios.get('api/users')
            .then(response => {
                this.setState({allUsers: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className = 'm-5 p-5'>
                <h3>Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.allUsers.map((user) => {
                             return (
                                 <tr key = {user._id}>
                                     <td>{user.name}</td>
                                     <td>{user.country}</td>
                                     <td>{user.email}</td>
                                     <td><Link to = {`/edit/${user._id}`}>Edit</Link></td>
                                 </tr>
                             )
                         })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default  AllUsers