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


export const getMyProfile = () => async dispatch => {

 //Check if there is a token, then put it in a global header
 if(localStorage.token){
     setAuthToken(localStorage.token)
 }

 //If there is a token then we make our request
 try {
     
     const res = await axios.get('/api/getMyProfile');

     //Dispatch user loaded
     dispatch({
         type: 'USER_LOADED',
         payload: res.data //This is the user
     })
 } catch (error) {
     dispatch({
         type: 'AUTH_ERROR'
     })
 }

}