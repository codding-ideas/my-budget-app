import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/createUserAction'

const Dashboard = (props) => {
   console.log('DASHBOARD', props.myProfile.name)

 useEffect(() => {
    props.getMyProfile()
 }, [])


 return (
  <div>
    <h1>MY DASH {props.myProfile.id}</h1>
  </div>
 )
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)