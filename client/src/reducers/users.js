import { FETCH_USERS } from '../actions/types'

export default function(state = [], action) {
   //You can check the action that comes into this reducer
  switch(action.type){
        case FETCH_USERS:
          return action.payload
      default:
      return state
  }
}
