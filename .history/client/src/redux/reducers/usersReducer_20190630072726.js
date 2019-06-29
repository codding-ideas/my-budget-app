

const initialState = {
 name: '',
 email: '',
 password: ''
}

export default function (state = initialState, action) {
    switch(action.type) {
     case 'CREATE_USER':
      return state
      default:
       return state
    }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ name, email, password });
  
    try {
      const res = await axios.post('/api/users', body, config);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
  
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
  
    }
  };