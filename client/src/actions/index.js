import axios from 'axios'


//We want this action to be called with all the values from our form 


export  const createUsers = (values) => {
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



  export  const addExpenses = (values) => {
    return function(dispatch) {
        axios.post('/api/expenses', values)
        .then((res) => {
           
            return dispatch({
                type: 'ADD_EXPENSES',
                payload: res.data
            })
        })
  
    }
    
  }