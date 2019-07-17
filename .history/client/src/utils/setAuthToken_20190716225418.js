//Functions that takes in token and if there is a token, it will add
// to the header if not it will delete from the header

//The reason why we are doing this, is to send this token to every
//request the user makes

import axios from 'axios'

//We will add a global header to axios so we need to import it

const setAuthToken = token => {
   //Check if there is a token
    //The token we pass in will come from the local storage
    if(token){
     axios.defaults.headers.common['x-auth-token'] = token
    }else {
     delete axios.defaults.headers.common['x-auth-token'];
    }

}

export default setAuthToken;