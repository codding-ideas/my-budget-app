import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../../redux/actions' //Importing all actions from the same file

class UserRegistration extends Component {
  state = {
      name: '',
      country: '',
      bio: '',
      password: '',
      email: '',
      marritalStatus: ''
  }
     // ON FROM CHANGE METHODS
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
       
            //=====FORM SUBMIT======

            onFormSubmit = (e) => {
                e.preventDefault();

            //Storing all the values and give it to axios to make the post request
                const newUser = {
                    name: this.state.name,
                    country: this.state.country,
                    bio: this.state.bio,
                    password: this.state.password,
                    email: this.state.email,
                    marritalStatus: this.state.marritalStatus    
                }
            //This is action creator created to make the post request
            this.props.createUsers(newUser)

                this.setState({
                    name: '',
                    bio: '',
                    email: '',
                    country: '',
                    password: ''
                })
            }

    render() {
        
        return (
            <div className = 'm-5 p-5'>
            <h3>Registration</h3>
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
        );
    }
}

export default connect(null, action) (UserRegistration);