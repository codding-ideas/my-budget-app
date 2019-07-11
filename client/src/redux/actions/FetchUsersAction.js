import axios from 'axios'

export const fetchUsers = () => {
   return function(dispatch) {
      axios.get('/api/users')
      .then((users) => {
        
         dispatch({
            type: "FETCH_USERS",
            payload: users.data
         })
      })
   }

}