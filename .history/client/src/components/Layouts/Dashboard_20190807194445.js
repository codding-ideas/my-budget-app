import React, {useEffect} from 'react'
import { connect } from 'react-redux';

 const Dashboard = (props) => {
  
console.log('DASH', props.user)
   return (
        
         <div>
              {props.user !== null  ? (
               <div>
                {props.user.name}
               </div>
              ): 'Loading'}

           
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
