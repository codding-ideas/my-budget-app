const axios = require('axios')
export const fetchAllIncome = () => {

 const f = axios.get('/api/income')
     return function(dispatch) {
        dispatch({
         type: 'FETCH_ALL_INCOME',
         payload: allIncome.data
        })
     }
}