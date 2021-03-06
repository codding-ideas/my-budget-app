import React, {useEffect} from 'react'
import { connect } from 'react-redux';

 const Dashboard = (props) => {
  
console.log('DASH', props.user)
   return (
        
         <div>
             <h1></h1>
              {props.user !== null  ? (
               <div>
                {props.user.name}
               </div>
              ): 'Loading'}

           

<div>
            <h1 className='large text-primary'>Dashboard</h1>
             style ={{width: 200}}></img>
          <div>
             {props.user !== null ? 
             <div>
               <i className='fas fa-user' />  
                  {props.user.name} welcome to your new Dashboard 
                  
               <hr/>
               <p>Name: {props.auth.loginUser.name}</p>
               <p>Email: {props.auth.loginUser.email}</p>
               <p>Date Joined: {props.auth.loginUser.date}</p>
               <p>ID: {props.auth.loginUser._id}</p>
             </div>: 
             <Spinner/>
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
