
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   userCreated: '',
   showMoreUser: '',
   loginUser: '',
   allUsers: [],
   incomeCreated: [],
   loading: true
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
       case 'LOGIN_SUCCESS':
          localStorage.setItem('token', payload.token);
         return {
           ...state,
            loginUser: payload,
            isAuthenticated: true,
            loading: false
         }
       case 'REGISTER_SUCCESS':
       return {
         ...state,
         userCreated:payload,
         allUsers: payload,
         isAuthenticated: true,
         loading: false
       };
       case 'FETCH_ALL_USERS':
         return {
           ...state,
           allUsers: payload
         }
         case 'SHOW_MORE_USER_INFO':
           return {
             ...state,
             showMoreUser: payload
           }
       case 'USER_LOADED':
        case '//Register a user
        export  const registerUser = (values) => {
            
            const config = {
             headers: {
              'Content-Type': 'application/json'
              }
            }
           
           //The values are the data from the form
            const body = JSON.stringify(values)
           
               return function(dispatch) {
                   axios.post('/api/users', body, config)
                   .then((res) => {
                       return dispatch({
                           type: 'REGISTER_SUCCESS',
                           payload: res.data //This endpoint returns a token as specify in the rapi
                       })
                       
                   }).catch((err) => {
                            //ERRORS FROM THE ENDPOINT. They are in array of errors
                   const errors = err.response.data.errors //This is where the errors are located
                   //check if there are errors
                   if(errors){
                    errors.forEach((error) => {
                     dispatch(setAlert(error.msg, 'danger'))
                    })
                   }
                   dispatch({
                    type: 'REGISTER_FAIL'
             })
             })
             
               }
               
             }
           '
         return{
           ...state,
           isAuthenticated: true,
           loading: false,
           incomeCreated: payload,
           loginUser: payload
         }
      case 'AUTH_ERROR':
      case 'LOGOUT':
       localStorage.removeItem('token');
       return {
         ...state,
         token: null,
         isAuthenticated: false,
         loading: false
       };
     default:
       return state;
   }

   
 }
 



 