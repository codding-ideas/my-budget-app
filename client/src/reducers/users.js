
export default function(state = [{name: 'Emmanuel'}], action) {
   //You can check the action that comes into this reducer
  switch(action.type){
        case 'CREATE_USER':
          return action.payload
      default:
      return state
  }
}
