import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/usersAction';
import Spinner from '../../components/Layouts/Spinner'
import Register from '../../components/forms/UserRegistrationForm'
const Dashboard = (props) => {
   

 useEffect(() => {
    props.getMyProfile()
 }, )

 
 //console.log('DASHBOARD', props.myProfile.myProfile.name)
   return (
      <div>
         {props.myProfile.myProfile === null ? <Spinner/>: <Fragment>
            <h1>{props.myProfile.myProfile.name}, welcome to your new Dashboard</h1>
            <hr/>
            <div>
               <h4>Name: {props.myProfile.myProfile.name}</h4>
               <h4>Name: {props.myProfile.myProfile.name}</h4>
            </div>
            <form>
               <input type = 'text'/>
            </form>
         </Fragment>}
      </div>
   )
   
   // const loaded = (
   //    <div>
   //       <h1>My Dashboard</h1>
   //       <hr/>
   //       <h1>Hello {props.myProfile.myProfile.name}, welcome to your new Dashboard</h1>
   //    </div>
   // )
 
}

const mapStateToProps = (state) => {
   return {
      myProfile: state.myProfile
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
