import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Spinner from '../Layouts/Spinner'
import { getMyProfile } from '../../redux/actions/auth'
import setAuthToken from '../../utils/setAuthToken'

import store from '../../store'
 const Dashboard = (props) => {
  
   //  if(!props.auth.isAuthenticated){
   //    console.log('No Data')
   //  }else {
   //    console.log('DASH', props.user.user.income)
   //  }
  

//   const income = (
//      <div>
//         {props.auth.isAuthenticated ? <div>
//            {props.user.user.income.map((income) => {
//               return <div key ={income._id}>
//                  <h1>{income.amount}</h1>
//               </div>
//            })}
//         </div>: 'No'}
//      </div>
//   )

useEffect(() => {
   props.getMyProfile()
}, [])

//console.log('Auth', props.auth.isAuthenticated)

// if(!props.auth.isAuthenticated){
//    console.log('User',)
// }else{
//    console.log('User',  props.user.user)
// }

   // return (
        
   //       <div>
   //            {props.auth.isAuthenticated ? <div>{props.user.user.name}</div>: 'No way'}

   //          <h1>DASH</h1>
   //    </div>
   // )

   
}

const mapStateToProps = (state) => {
   return {
      
     auth: state.auth, // You have to take the user object from the post route, it also stored in user object  
      user: state.auth.user
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
