
import axios from 'axios';



export  const createUser = (formValues) => {
 return function(dispatch) {
     axios.post('/api/users', formValues)
     .then((res) => {
         console.log(res)
         return dispatch({
             type: 'CTREATE_USER',
             payload: res.data
         })
     })

  }
 
}