import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types";

 
 //When we login it should get all our profiles and when visit another
 //user profile page it should pul it as well. we will keep this is a variable called profile
 
 const initialState = {
    profile: null, //individual profile
    profiles: [], //All profiles,
    repos: [],
    loading: true,
    error : {} //Any errors in our request
 }

 export default function(state = initialState, action) {
     const { type, payload } = action

      switch(type) {
         case GET_PROFILE:
             return {
                 ...state,
                 profile: payload,
                 loading: false
                
             }

             case PROFILE_ERROR:
                 return {
                     ...state,
                     error: payload,
                     loading: false

                 }
                 default:
                     return state
                case CLEAR_PROFILE:
                    return {
                        ...state,
                        profile: null,
                        repos: [],
                        loading: false
                    }
      }
 }