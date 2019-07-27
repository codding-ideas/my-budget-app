import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, [])

 console.log('DASHBOARD', props.myProfile.myProfile.name)
   return props.myProfile.myProfile === null ? <h1>Empty</h1> : <h1>Loaded. {props.myProfile.myProfile.email}</h1>
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
