import axios from 'axios'


//We want this action to be called with all the values from our form 


export  const createUserss = (values) => {
    return function(dispatch) {
        axios.post('/api/users', values)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: 'CTREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }


 export const fetchUsers = () => {
    return function(dispatch) {
            axios.get('/api/users')
            .then((res) => {
                 dispatch({
                     type: 'FETCH_USERS',
                     payload: res.data
                 })
            })
    } 
}
