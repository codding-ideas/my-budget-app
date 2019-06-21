import React, { Component } from 'react';
import axios from 'axios';


class SingleUser extends Component {

    //====STEPS====

   //1: Create initial state
   state = {
       name: '',
       country: '',
       bio: '',
       email: '',
       password: '',
       marritalStatus: ''
   }
   //2: Take the id of the user and make a request and put their data into state
   // this.props.match.params.id means we are grabbing the id from the url and make a request to fetch that user

   componentDidMount () {
       axios.get(`/api/user/${this.props.match.params.id}`)
       .then((response) => {
           
           //Grabbing the user details and put them into state
           this.setState({
               name: response.data.name,
               country: response.data.country,
               bio: response.data.bio,
               email: response.data.email,
               password: response.data.password,
               marritalStatus: response.data.marritalStatus
           })
           console.log(this.state)
       })
   }

   // 3: We will take the user id found to make another request to pull their data and make them available for the user to update
   
   //This method will trigger when submit a form

   //4. Let's create on form input change methods
            
        onChangeName = (e)  =>{
            this.setState({
                name: e.target.value
            });
        }

        onChangeCountry = (e) => {
            this.setState({
                country: e.target.value
            });
        }

        onChangePassword = (e) => {
            this.setState({
                password: e.target.value
            });
        }

        onChangeEmail = (e) => {
            this.setState({
                email: e.target.value
            });
        }

        onChangeBio = (e) => {
            this.setState({
                bio: e.target.value
            });
        }
        onChangeMarritalStatus = (e) => {
            this.setState({
                marritalStatus: e.target.value
            });
        }


            // FORM INPUT CHANGE METHODS
            onChangeName = (e)  =>{
                this.setState({
                    name: e.target.value
                });
            }

            onChangeCountry = (e) => {
                this.setState({
                    country: e.target.value
                });
            }

            onChangePassword = (e) => {
                this.setState({
                    password: e.target.value
                });
            }

            onChangeEmail = (e) => {
                this.setState({
                    email: e.target.value
                });
            }

            onChangeBio = (e) => {
                this.setState({
                    bio: e.target.value
                });
            }
            onChangeMarritalStatus = (e) => {
                this.setState({
                    marritalStatus: e.target.value
                });
            }
        // 5. Creating on form submit method and there we make a http request

        onFormSubmit = (e) => {
            e.preventDefault()
            
            //Making http request by posting the data to the backend

            //Assigning the user data in state  to user data in our DB

            const userUpdatedData = {
              name : this.state.name,
              country: this.state.country,
              bio: this.state.bio,
              password: this.state.password,
              email: this.state.email,
              marritalStatus: this.state.marritalStatus
            }

            //Giving the above object to axios to update the user
            axios.post(`/api/update/${this.props.match.params.id}`, userUpdatedData)
            .then((res) => {
                console.log(userUpdatedData)

                //Redirect
                this.props.history.push('/users')
            })

        }

    render() {
    
      
        return (
            <div className = 'p-5 m-5'>
                <div className = 'm-5 '>
                <h3>Your are editing... {this.state.name}</h3>
               <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                </div>

                <div className="form-group">
                    <label>Country: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.country}
                            onChange={this.onChangeCountry}
                            />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                </div>

                <div className="form-group">
                    <label>Bio: </label>
                    <textarea  type="text"
                            className="form-control"
                            value={this.state.bio}
                            onChange={this.onChangeBio}
                            />
                    </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="No"
                                checked={this.state.marritalStatus==='No'}
                                onChange={this.onChangeMarritalStatus}
                                />
                        <label className="form-check-label">No</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Yes"
                                checked={this.state.marritalStatus==='Yes'}
                                onChange={this.onChangeMarritalStatus}
                                />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="Divorced"
                               
                                checked={this.state.marritalStatus==='Divorced'}
                                onChange={this.onChangeMarritalStatus}
                                />
                        <label className="form-check-label">Divorced</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary" />
                </div>
            </form>
            </div>
            </div>
        );
    }
}

export default SingleUser;