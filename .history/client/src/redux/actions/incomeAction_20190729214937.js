const axios = require('axios')
export const fetchAllIncome = () => {

 const fet = axios.get('/api/income')
     return function(dispatch) {
        dispatch({
         type: 'FETCH_ALL_INCOME',
         payload: allIncome.data
        })
     }
}