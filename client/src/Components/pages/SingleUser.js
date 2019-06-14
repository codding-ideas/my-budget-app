import React, { Component } from 'react';
import axios from 'axios';


class SingleUser extends Component {

    state = {
        isLoading: true,
        user: null
    }
    componentDidMount() {
      axios.get('/' + this.props.match.params.id)
      .then((user) => {
          this.setState({
              isLoading: false,
              user:  user.data
          })
      })
    }

    render() {
     console.log(this.props)
        let content = <p>Is loading......</p>;
      
        return (
            <div>
               <h3>Single User</h3>
               <a href ='/link'>Am a link - ID = {this.props.match.params.id}</a>
            </div>
        );
    }
}

export default SingleUser;