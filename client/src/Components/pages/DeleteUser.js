import React, { Component } from 'react';
import axios from 'axios'
import cryingImg from '../../images/crying.gif'
import { Link } from 'react-router-dom'

class DeleteUser extends Component {

    componentDidMount(){
         axios.delete(`/api/delete/${this.props.match.params.id}`)
         .then((res) => {
             console.log(res)
         })
    }

    render() {
        return (
            <div className = 'm-5 p-5'>
                <div className='m-5'>
                <h4 className = 'text-danger'>Oh am deleted</h4>
                <div style ={{height: '2px'}}>
                <img style = {{height: '200px'}} src = {cryingImg} alt ='sad'/>
                <Link to = {'/users'} className='btn btn-info'>Go Back</Link>
                </div>
               
                </div>
               <p>
              
               </p>
            </div>
        );
    }
}

export default DeleteUser;

