import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'
import Register from '../../components/forms/UserRegistrationForm'
const Dashboard = (props) => {
   
   import Dashboard from './components/pages/Dashboard'
   
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
