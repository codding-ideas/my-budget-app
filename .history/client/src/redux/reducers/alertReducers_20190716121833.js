
const initalState = [];

export default function(state = initalState, action){
 switch(action.type){
  case 'SET_ALERT':
    return [...state, action.payload];

    case 'REMOVE_ALERT':
     return state.filter(alert => alert.id !)
 }
}