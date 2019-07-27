import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, [])

 console.log('DASHBOARD', props.myProfile.name)
 return props.auth.isAuthenticated && props.myProfile === null ? <Spinner/>:<Fragment>
    <h2>Check later</h2>
 </Fragment>
 
 
}

const mapStateToProps = (state) => {
   return {
      user: state
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
