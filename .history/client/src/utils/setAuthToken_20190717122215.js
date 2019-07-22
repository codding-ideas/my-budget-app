//Functions that takes in token and if there is a token, it will add
// to the header if not it will delete from the header

//The reason why we are doing this, is to send this token to every
//request the user makes

//We will add a global header to axios so we need to import it

import axios from 'axios'

//All what this method is doing is it will check if there is a token in a local storage or not. If there is one then we will set it as a global header to axios


//This works like when making request to protective y
const setAuthToken = token => {
   //Check if there is a token
    //The token we pass in will come from the local storage
    if(token){
     axios.defaults.headers.common['x-auth-token'] = token //if there is a token then we set it as a global header so any protected route can have access to that token
    }else {
     delete axios.defaults.headers.common['x-auth-token'];
    }

}

export default setAuthToken;