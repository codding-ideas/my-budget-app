import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import { getMyProfile } from '../../redux/actions/usersAction';
import Spinner from '../../components/Layouts/Spinner'
import setAuthToken from '../../utils/setAuthToken'
import AddIncome from '../../components/forms/AddIncomeForm'


    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

 const Dashboard = (props) => {
  
   useEffect(() =>{
      props.getMyProfile()
   }, [])

console.log('DASHBOARD', props.auth.loginUser.income)
   return (
        
         <div>
            <h1 className='large text-primary'>Dashboard</h1>
            <img src ={props.auth.loginUser.avatar} style ={{width: 200}}></img>
          <div>
             {props.auth ? 
             <div>
               <i className='fas fa-user' />  
                  {props.auth.loginUser.name} welcome to your new Dashboard 
                  
               <hr/>
               <p>Name: {props.auth.loginUser.name}</p>
               <p>Email: {props.auth.loginUser.email}</p>
               <p>Date Joined: {props.auth.loginUser.date}</p>
               <p>ID: {props.auth.loginUser._id}</p>
             </div>: 
             <Spinner/>
            }
          </div>

          <div>
             <form>
                <input type='text'/>
             </form>
          </div>nb

          <div>
          <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
             <h1>Income History</h1>
             <hr/>
             {props.auth.loginUser.income ? <div>
               {props.auth.loginUser.income.map((income) => {
                  return (
                     <div key ={income.id}>
                        <p>{income.description} - {income.amount}</p> 
                     </div>
                  )
               })}
             </div> : ''}

              <div>
                 <AddIncome/>
              </div>
          </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      
      auth: state.user, // You have to take the user object from the post route, it also stored in user object  
   }
}

export default connect(mapStateToProps, {getMyProfile}) (Dashboard)
