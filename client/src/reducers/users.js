
export default function(state = [{name: 'Emmanuel'}], action) {
   //You can check the action that comes into this reducer
  switch(action.type){
        case 'ADD_EXPENSES':
          return action.payload
      default:
      return state
  }
}





