import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid'


//This uses thunk middleware
export const setAlert = (msg, alertType, timeOut = 5000) => dispatch => {
    
  const id = uuid.v4();
  //Calling setAlert from our reducer
 dispatch({
     type: SET_ALERT,
     payload: {
          msg, alertType, id
     }
 })
     setTimeout(() => {
       dispatch({
         type: REMOVE_ALERT,
         payload: id
       })
     }, timeOut)
}

//We have to called this action in our component so that we can get the data into our component