import axios from 'axios';

export  const createUsers = (values) => {

    return function(dispatch) {
        axios.post('/api/users', values)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: 'CREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }


