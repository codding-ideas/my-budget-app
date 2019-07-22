import axios from 'axios';


export  const registerUser = (values) => {

 const config = {
  headers: {
   'Content'
  }
 }

    return function(dispatch) {
        axios.post('/api/users', values)
        .then((res) => {
            return dispatch({
                type: 'CREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }