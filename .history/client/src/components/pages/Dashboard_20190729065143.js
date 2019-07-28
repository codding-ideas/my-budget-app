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

console.log('DASH', props.user.name)
   return (
        
         <div>
            <h1 className='large text-primary'>Dashboard</h1>
            {props.user ? 
               <p className='lead'>
               <i className='fas fa-user' /> {props.user.name} welcome to your new Dashboard 
             </p> : 
             <Spinner/>}
      
      <hr/>
     <h4></h4>
     
      </div>
   )
   

}

const mapStateToProps = (state) => {
   return {
      
      user: state.auth.user
     
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
