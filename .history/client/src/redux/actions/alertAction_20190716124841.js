import uuid from 'uuid';


export const setAlert = (message, alertType) => dispatch => {
 const id = uuid.v4();
  dispatch({
   type: 'SET_ALERT',
   payload: {message, alertType, id}
  })
}