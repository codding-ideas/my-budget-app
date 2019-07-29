const axios = require('axios')
export const fetchAllIncome = () => {

 const allIncome = axios.get('/api/income')
     return function(dispatch) {
        dispatch({
         type: 'FETCH_'
        })
     }
}