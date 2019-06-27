import axios from 'axios'


//We want this action to be called with all the values from our form 
export  const createUsers = (values) => {
    return function(dispatch) {
        axios.post('/api/create', values)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: 'CTREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }


  export  const createExpenses = (values) => {
    return function(dispatch) {
        axios.post('/api/addexpenses', values)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: 'ADD_EXPENSES',
                payload: res.data
            })
        })
  
    }
    
  }



