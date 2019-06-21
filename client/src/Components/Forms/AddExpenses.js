import React, { Component } from 'react';
import axios from 'axios';

class AddExpenses extends Component {
  state = {
      withdrawer: '',
      amount: '',
      description: ''
     
  }
     // ON FROM CHANGE METHODS
            onChangeWithdrawer = (e)  =>{
                this.setState({
                    withdrawer: e.target.value
                });
            }

            onChangeAmount = (e) => {
                this.setState({
                    amount: e.target.value
                });
            }

            onChangedescription = (e) => {
                this.setState({
                    description: e.target.value
                });
            }


            //=====FORM SUBMIT======

            onFormSubmit = (e) => {
                e.preventDefault();

            //Storing all the values and give it to axios to make the post request
                const newExpenses = {
                    withdrawer: this.state.withdrawer,
                    amount: this.state.amount,
                    description: this.state.description
                    
                }
            //Making post request / Creating User
                axios.post('/api/addexpenses', newExpenses)
                    .then(res => console.log(res.data));
            //Clearing the input fields

                this.setState({
                    withdrawer: '',
                    amount: '',
                    description: ''
                })
            }

    render() {
        
        return (
            <div className = 'm-5 p-5'>
            <h3>Add Expenses</h3>
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Withdrawer: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.withdrawer}
                            onChange={this.onChangeWithdrawer}
                            />
                </div>

                <div className="form-group">
                    <label>Amount: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                            />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangedescription}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" className="btn btn-primary" />
                </div>
            </form>
        </div>
        );
    }
}

export default AddExpenses;