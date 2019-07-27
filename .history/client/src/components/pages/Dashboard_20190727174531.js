import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction';
import Spinner from '../../components/Layouts/Spinner'

const Dashboard = (props) => {
   console.log('DASHBOARD', props.myProfile.myProfile.name)

 useEffect(() => {
    props.getMyProfile()
 }, [])


 return props.myProfile === null ? <Spinner/> : <div>
    <h1></h1>
 </div>
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
