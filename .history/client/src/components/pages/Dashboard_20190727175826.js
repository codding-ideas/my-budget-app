import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   console.log('DASHBOARD', props)

 useEffect(() => {
    props.getMyProfile()
 }, [])


 return props. === null ? <Fragment className = 'm-5'>
 <h1> {props.myProfile.name}</h1></Fragment>:<Spinner/> 
 
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile,
      auth: state.auth
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
