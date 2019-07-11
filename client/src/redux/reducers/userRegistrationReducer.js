
const initialState = {
  auth: null,
  users: [],
  totalAmount: []
}

export default (state = initialState,  action) => {
  //You can check the action that comes into this reducer
 switch(action.type){
       case 'FETCH_USERS':
         return {
           ...state,
           users: action.payload,
           totalAmount: action.payload.amount
         }
         

     default:
     return state
 }
}

