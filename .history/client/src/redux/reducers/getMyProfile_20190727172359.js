
 
 const initialState = {
 myProfile: {null}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
console.log('ACTION COMES IN', action)
  switch (type) {
    case 'GET_MY_PROFILE':
      return {
        ...state,
        myProfile: payload
      };
    default:
      return state;
  }
}




