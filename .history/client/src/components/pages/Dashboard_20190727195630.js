import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions/usersAction';
import Spinner from '../../components/Layouts/Spinner'
import Register from '../../components/forms/UserRegistrationForm'
const Dashboard = (props) => {
   

 useEffect(() => {
    props.loadUser()
 }, [])

//  const loaded = (
//     <div>
//        <h1>Try</h1>
//     </div>
//  )
 //console.log('DASHBOARD', props.myProfile.myProfile.name)
   return props.myProfile.myProfile === null ? <Spinner/> : <h1>Loaded. {props.myProfile.myProfile.email}
   {props.myProfile.myProfile.name}
   
   </h1>
   
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {loadUser}) (Dashboard)
