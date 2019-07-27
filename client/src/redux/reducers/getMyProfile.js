
 
 const initialState = {
 myProfile: null,
 loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MY_PROFILE':
      return {
        ...state,
        myProfile: payload,
        loading: false
      };
    default:
      return state;
  }
}




