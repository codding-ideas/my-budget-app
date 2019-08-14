

import {CREATE_INCOME} from '../actions/types';

const initialState = {
 income : []
};

export default function(state = initialState, action) {
 const { type, payload } = action;

 switch (type) {
   case CREATE_INCOME:
     return {
       ...state,
       income: payload
     };
   
     };
   default:
     return state;
 }
}




