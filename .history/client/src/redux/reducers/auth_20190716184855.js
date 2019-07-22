const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null
}

export default function(state = initialState, acttion) {
 switch(acttion.type){
   case 'REGISTER_SUCCESS':
    localStorage.getItem('token', acttion.payload.token) //We don't want to keep the token in
 }
}