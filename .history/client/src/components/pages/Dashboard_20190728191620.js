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

//    if(props.user.myProfile)
//    console.log('Dashboard', props.user.myProfile.name)
//  //console.log('DASHBOARD', props.myProfile.myProfile.name)

const myProfile = (
   
)



   return (
      
      <div>
         { props.user.myProfile ? myProfile : <Spinner/>}
          <Fragment>
          
            <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> {} welcome to your new Dashboard 
      </p>
            <hr/>
           
         </Fragment>
      </div>
   )
   
   // const loaded = (
   //    <div>
   //       <h1>My Dashboard</h1>
   //       <hr/>
   //       <h1>Hello {props.myProfile.myProfile.name}, welcome to your new Dashboard</h1>
   //    </div>
   // )
 
}

const mapStateToProps = (state) => {
   return {
      user: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
