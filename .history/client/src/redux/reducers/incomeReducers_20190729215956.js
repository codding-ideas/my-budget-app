
const initialState = {
 amount: NULL
}

export default function (state = initialState, action ){
   switch(action.type) {
    case 'FETCH_ALL_INCOME':
     return {
      ...state,
      amount : action.payload
     }
     default:
      return {
       ...state
      }
   }
  

}