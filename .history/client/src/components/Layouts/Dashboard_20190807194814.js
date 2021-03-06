import React, {useEffect} from 'react'
import { connect } from 'react-redux';

 const Dashboard = (props) => {
  
console.log('DASH', props.user)
   return (
        
<div>
            <h1 className='large text-primary'>Dashboard</h1>
            
          <div>
             {props.user !== null ? 
             <div>
               <i className='fas fa-user' />  
                  {props.user.name} welcome to your new Dashboard 
                  
               <hr/>
               <p>Name: {props.user.name}</p>
               <p>Email: {props.user.name}</p>
             </div>: ''
            }
          </div>
      </div>
   )

   
}

const mapStateToProps = (state) => {
   return {
      
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
   }
}

export default connect(mapStateToProps) (Dashboard)
