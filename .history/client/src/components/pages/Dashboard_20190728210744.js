import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/usersAction';
import Spinner from '../../components/Layouts/Spinner'
import Register from '../../components/forms/UserRegistrationForm';
import setAuthToken from '../../utils/setAuthToken'



    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

const Dashboard = (props) => {
  
   useEffect(() =>{
      props.getMyProfile()
   }, [])




   return (
      
      <div>
        
         <div>
            <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' />  welcome to your new Dashboard 
      </p>
      <hr/>
      <div>
        
         
      </div>
      </div>:<Spinner/>}
      </div>
   )
   

}

const mapStateToProps = (state) => {
   return {
      user: state
     
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
