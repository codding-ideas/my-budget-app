import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'
import Register from '../../components/forms/UserRegistrationForm'
const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, [])

 const loaded = (
    <div>
       <h1>He</h1>
    </div>
 )
 //console.log('DASHBOARD', props.myProfile.myProfile.name)
 return (
    <div>
       {props.myProfile.myProfile === null ? <Spinner/>: loaded}
    </div>
 )
   

   
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
