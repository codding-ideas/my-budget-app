
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   userCreated: '',
   showMoreUser: '',
   loginUser: '',
   allUsers: [],
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
           
       case 'USER_LOADED':
         return{
           ...state,
           isAuthenticated: true,
           loading: false,
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
 



 