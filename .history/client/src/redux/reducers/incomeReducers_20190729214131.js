
const initialState = {
 description: '',
 amount: '',
 all: []
}

export default function (state = initialState, action ){
   switch(action.type) {
    case 'FETCH_ALL_INCOME':
     return {
      ...state,
      all : action.payload
     }
   }
   default
}