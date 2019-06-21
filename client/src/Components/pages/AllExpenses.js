
import React, {Component} from 'react';
import axios from 'axios';

 class AllExpenses extends Component {

    state = {
        allExpenses: []
    }

    componentDidMount() {
        axios.get('api/expenses')
            .then(response => {
                this.setState({allExpenses: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className = 'm-5 p-5'>
                <div className = 'm-5'>
                <h4>The total number of users are {this.state.allExpenses.length}</h4>
                <hr/>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className = 'bg-primary text-white'>
                            <th>Withdrawer</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.allExpenses.map((expense) => {
                             return (
                                 <tr key = {expense._id}>
                                     <td>{expense.withdrawer}</td>
                                     <td>{expense.amount}</td>
                                     <td>{expense.description}</td>
                                 </tr>
                             )
                         })}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default  AllExpenses