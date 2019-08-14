import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux';

 const Dashboard = (props) => {
  
console.log('DASH', props.user)
   return (
        
      <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <Fragment>
             {props.user !== null ? (
                <div>
                <i className='fas fa-user'/>  
                {props.user.name}  welcome to your new Dashboard 
                   
                <hr/>
                <p>Name: {props.user.name}</p>
                <p>Email: {props.user.email}</p>
                <hr/>
                <button className='btn btn-primary m-5'>Add Income/Expenses</button>
             </div>): (
                <Fragment>
                  <h1>No data for you</h1>
                </Fragment>
             )
             
            }
          </Fragment>
      </Fragment>
   )

   
}

const mapStateToProps = (state) => {
   return {
      
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    acc
   }
}

export default connect(mapStateToProps) (Dashboard)
