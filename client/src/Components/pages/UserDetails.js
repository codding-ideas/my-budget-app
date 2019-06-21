import React from 'react'
import axios from 'axios'


class UserDetails extends React.Component {


  state = {
      name: '',
      country: '',
      bio: '',
      password: '',
      email: '',
      marritalStatus: ''
  }

   componentDidMount() {
        axios.get(`/api/user/${this.props.match.params.id}`)
        .then((res) => {
            this.setState({
                name: res.data.name,
                country: res.data.country,
                bio: res.data.bio,
                email: res.data.email,
                password: res.data.password,
                marritalStatus: res.data.marritalStatus
            })
        })
   }

    render() {
        console.log(this.state)
       return (
            <div className = 'm-5 p-5 bg-success'>
               <div className = 'container bg-warning m-5'>
               <h1>Your details are</h1>
                 <h4>Name: {this.state.name}</h4>
                 <h4>Country: {this.state.country} </h4>
                 <h4>Bio: {this.state.bio} </h4>
                 <h4>Email: {this.state.email} </h4>
                 <h4>Marrital Status: {this.state.marritalStatus} </h4>
               </div>
            </div>
        )
    }
}

export default UserDetails;