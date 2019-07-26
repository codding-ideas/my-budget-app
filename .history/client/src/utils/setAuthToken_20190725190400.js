 import axios from 'axios'

// //This a function that takes in a token,
// //If there is a token, it will add to the header
// //if there is no token it will delete it from header

// //We will add a global header to axios so we need to import it




const setAuthToken = (token) => {

  //Check if there is a token
    //The token we pass in will come from the local storage

    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      //The token here is the token from the localstorage
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;

// //The reason why we are doing this, is to send this token to every
// //request the user makes






