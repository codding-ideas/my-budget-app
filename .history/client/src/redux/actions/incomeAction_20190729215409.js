const axios = require('axios')
export const fetchAllIncome = () => {

 const allIncome = axios.get('/api/income')
 console.log(allIncome)
     return function(dispatch) {
        dispatch({
         type: 'FETCH_ALL_INCOME',
         payload: allIncome.data
        })
     }
}