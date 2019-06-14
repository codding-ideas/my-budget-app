

export default function(state = [999], action) {
   //You can check the action that comes into this reducer
  switch(action.type){
        case 'FETCH_USERS':
          return action.payload
      default:
      return state
  }
}
