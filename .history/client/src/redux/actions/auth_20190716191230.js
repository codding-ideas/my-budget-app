import axios from 'axios';
import { setAlert } from '../actions/'

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
            }).catch((err) => {
                      //ERRORS FROM THE ENDPOINT. They are in array of errors
             const errors = err.response.data.errors //This is where the errors are located
             //check if there are errors
             dispatch({
              type: 'REGISTER_FAIL'
             })
            })

     
        

            
        })
  
    }
    
  }
