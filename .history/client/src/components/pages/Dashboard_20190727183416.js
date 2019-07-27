import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, [])

 console.log('DASHBOARD', props.myProfile.myProfile)
   return props.myProfile.myProfile === null ? <h
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
