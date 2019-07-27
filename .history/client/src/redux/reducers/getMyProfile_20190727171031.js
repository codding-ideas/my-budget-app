
 
 const initialState = {
 myProfile: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MY_PROFILE':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case 'REGISTER_FAIL':
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




