import React, {useEffect} from 'react'
import { connect } from 'react-redux';


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

// useEffect(() => {
//    props.getMyProfile()
// }, [])

//console.log('Auth', props.auth.isAuthenticated)

// if(!props.auth.isAuthenticated){
//    console.log('User',)
// }else{
//    console.log('User',  props.user.user)
// }

// console.log('Auth',props.isAuthenticated)
// if(props.isAuthenticated){
//  console.log('User', props.user)
// }else{
//  console.log('Waiting.....')
// }

console.log('DASH', props.isAuthenticated)
   return (
        
         <div>
              {props.isAuthenticated && props.}

            <h1>DASH</h1>
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
