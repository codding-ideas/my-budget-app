import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux';

 const Dashboard = (props) => {
  
console.log('DASH', props.user)
   return (
        
      <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            
            <Fragment>
             {props.user !== null ? (
                
             ) 
             
            }
          </Fragment>
      </Fragment>
   )

   
}

const mapStateToProps = (state) => {
   return {
      
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
