import axios from 'axios';
import { setAlert } from 

export  const registerUser = (values) => {

 const config = {
  headers: {
   'Content-Type': 'application/json'
  }
 }
//The values are the data from the form
 const body = JSON.stringify(values)

    return function(dispatch) {
        axios.post('/api/users', body, config)
        .then((res) => {
            return dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data //This endpoint returns a token as specify in the rapi
            }).catch(

             //ERRORS FROM THE ENDPOINT. They are in array of errors
             const console.error();
             
             dispatch({
              type: 'REGISTER_FAIL'
             })
            )

            
        })
  
    }
    
  }
