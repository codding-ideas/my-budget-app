const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null
}

export default function(sta)