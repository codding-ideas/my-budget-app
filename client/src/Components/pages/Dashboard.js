import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='m-5 p-5' >
                <h1>Dashboard</h1>
                <hr/>
                <h3>Total Expenses = 0</h3>
                <h3>Total Income = 0</h3>
                <h3>Net Income = 0</h3>
                <h3>Total Number of Customers = 0</h3>
            </div>
        );
    }
}

export default Dashboard;