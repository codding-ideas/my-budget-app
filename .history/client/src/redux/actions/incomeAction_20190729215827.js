const axios = require('axios')
// export const fetchAllIncome = () => {

//  const allIncome = axios.get('/api/income')
//  console.log(allIncome)
//      return function(dispatch) {
//         dispatch({
//          type: 'FETCH_ALL_INCOME',
//          payload: allIncome.data
//         })
//      }
// }


export const fetchAllIncome = () => async dispatch => {

 //Check if there is a token, then put it in a global header

 //If there is a token then we make our request
 try {
     
     const res = await axios.get('/api/income');

     //Dispatch user loaded
     dispatch({
         type: 'FETCH_ALL_INCOME',
         payload: res.data //This is the user
     })
 } catch (error) {
     dispatch({
         type: 'AUTH_ERROR'
     })
 }

}
