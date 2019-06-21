import React, { Component } from 'react';
import axios from 'axios'
import sadImage from '../../images/sad.jpg'


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
                <h4>Oh am deleted</h4>
                <div style ={{height: '2px'}}>
                <img style = {{height: '200px'}} src = {sadImage} alt ='sad'/>
                </div>
                </div>
            </div>
        );
    }
}

export default DeleteUser;

