import axios from 'axios';


export  const registerUser = (values) => {

 const config = {
  headers: {
   'Content-Type': 'application/json'
  }
 }
//The values are the data from the form
 const body = JSON.stringify(values)

    return function(dispatch) {
        axios.post('/api/users', body, )
        .then((res) => {
            return dispatch({
                type: 'CREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }
