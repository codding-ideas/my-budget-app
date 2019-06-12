import axios from 'axios'

 const fetchUsers = () => {
    return function(dispatch) {
            axios.get('/api/users')
            .then((res) => {
                 dispatch({
                     type: 'FETCH_USERS',
                     payload: res
                 })
            })
    } 
}


module.exports = {
    fetchUsers
}