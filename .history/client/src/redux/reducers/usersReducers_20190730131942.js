
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   loading: true,
   allUsers:[]
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
     case 'REGISTER_SUCCESS':
       return {
         ...state,
         userCreated: payload,
        allUsers: payload,
         isCreated: true
       }
      case 'FETCH_ALL_USERS':
        return {
          ...s
        }
       case 'LOGIN_SUCCESS':
       localStorage.setItem('token', payload.token);
       return {
         ...state,
         ...payload,
         isAuthenticated: true,
         loading: false
       };
       case 'GET_MY_PROFILE':
         return{
           ...state,
           user: payload,
           isAuthenticated: true,
           allUsers: payload
         }
      
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
 



 