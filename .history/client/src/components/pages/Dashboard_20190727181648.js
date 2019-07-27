import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   console.log('DASHBOARD', props)

 useEffect(() => {
   
 }, [])


 return props.auth.isAuthenticated && props.myProfile === null ? <Spinner/>:<Fragment>
    <h2>Check later</h2>
 </Fragment>
 
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile,
      auth: state.auth
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
