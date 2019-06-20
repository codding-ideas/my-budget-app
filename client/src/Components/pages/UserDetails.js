import React from 'react'



class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
       return (
            <div className = 'm-5 p-5 bg-success'>
               <div className = 'container bg-warning m-5'>
               <h1>Your details are</h1>
               </div>
            </div>
        )
    }
}

export default UserDetails;