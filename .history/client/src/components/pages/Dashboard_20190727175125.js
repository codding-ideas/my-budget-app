import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   console.log('DASHBOARD', props.myProfile.myProfile)

 useEffect(() => {
    props.getMyProfile()
 }, [])


 return props.myProfile === null ? <Spinner/> : <Fragment className = ''>
    <h1> {props.myProfile.name}</h1>
 </Fragment>
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
