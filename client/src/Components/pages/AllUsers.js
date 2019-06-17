import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loadingImage from '../../images/loading.svg'

// class AllUsers extends Component {
//    state = {
//        allUsers: [],
//        isLoading: true
//    }

//    //Fetching all users
//    componentDidMount() {
//       axios.get(`api/users/`)
//       .then((res) => {
//           this.setState({
//               allUsers: res.data,
//               isLoading: false
//           })
//       })
//    }

//     render() {

//         let content = (
//             <div className=''>
//                 <img style={{width:'100px', height: '100px', marginLeft: '300px', marginTop: '100px'}} src={loadingImage} alt='for loading'/>
//             </div>
//         )
    

//         if(!this.state.isLoading && this.state.allUsers) {
//             return (
//                 <div className ='p-5 m-5'>
//                         <h1>All Customers</h1>
//                         <div className ='col-12'>
//                   <table className="table table-striped">
//                     <thead>
//                         <tr>
//                         <th scope="col">First name</th>
//                         <th scope="col">Last name</th>
//                         <th scope="col">info</th>
//                         <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                     
//                     {this.state.allUsers.map((user) => {
//                     return <tr key={user._id}>
//                     <th scope="row">{user.firstName}</th>
//                     <td>{user.lastName}</td>
//                     <td><Link to ={`/users/${user._id}`}>Details</Link></td>
//                     <td><button className='btn btn-danger text-white' >Delete</button></td>
//                     </tr>
//                          })}
        
//                     </tbody>
//                  </table>
//                  </div>
//               </div>
//                 );
//         }

//         //Renders if no customers were found
//         if(!this.state.isLoading && this.state.allUsers){
//             return (
//                 <div>
//                     <p>No customers found. Try again later</p>
//                 </div>
//             )
//         }
//          return content
       
       
//     }
// }

const AllUsers = () => {
   
    const [ customers, setCustomers ] = useState({
        allCustomers: [],
        isLoading: false
    })
    console.log(customers)
    useEffect(() => {
        axios.get(`api/users/`)
        .then((res) => {
        return   setCustomers({
              allCustomers: res.data,
              isLoading: true
          })
        })
    }, [])

    let content = (
                    <div className=''>
                        <img style={{width:'100px', height: '100px', marginLeft: '300px', marginTop: '100px'}} src={loadingImage} alt='for loading'/>
                    </div>
                )

          
        if(customers.isLoading && customers.allCustomers) {
            return (
                <div className ='p-5 m-5'>
                        <h1>All Customers</h1>
                        <div className ='col-12'>
                  <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">info</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                    {customers.allCustomers.map((user) => {
                    return <tr key={user._id}>
                    <th scope="row">{user.firstName}</th>
                    <td>{user.lastName}</td>
                    <td><Link to ={`/users/${user._id}`}>Details</Link></td>
                    <td><button className='btn btn-danger text-white' >Delete</button></td>
                    </tr>
                         })}
        
                    </tbody>
                 </table>
                 </div>
              </div>
                );
        } 
        
             //Renders if no customers were found
             if(customers.isLoading && customers.allCustomers){
                return (
                    <div>
                        <p>No customers found. Try again later</p>
                    </div>
                )
            }

   
    return content

}

export default AllUsers;