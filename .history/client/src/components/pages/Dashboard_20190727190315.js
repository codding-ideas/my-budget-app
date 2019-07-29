import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, [])

 //console.log('DASHBOARD', props.myProfile.myProfile.name)
   return props.myProfile.myProfile === null ? <Spinner/> : <h1>Loaded. {props.myProfile.myProfile.email}
   {props.myProfile.myProfile.name}
   </h1>
   <for
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)