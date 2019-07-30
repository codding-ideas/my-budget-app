import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/usersAction';
import Spinner from '../../components/Layouts/Spinner'
import setAuthToken from '../../utils/setAuthToken'



    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

 const Dashboard = (props) => {
  
   useEffect(() =>{
      props.getMyProfile()
   }, [])

console.log('DASHBOARD', props.auth)
   return (
        
         <div>
            <h1 className='large text-primary'>Dashboard</h1>
            <div>
            {props.auth ? 
               <h4 className='lead'>
               <i className='fas fa-user' />  {props.auth.name} welcome to your new Dashboard 
             <h4/>
               <hr/>
     <p>Name: {props.auth.name}</p>
     <p>Email: {props.auth.email}</p>
     <p>Date Joined: {props.auth.date}</p>
     <p>ID: {props.auth._id}</p>
              : 
             <Spinner/>}
      
   )
   

}

const mapStateToProps = (state) => {
   return {
      
      auth: state.user.user // You have to take the user object from the post route, it also stored in user object
     
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
