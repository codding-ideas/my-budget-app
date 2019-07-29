
const initialState = {
 description: '',
 amount: '',
 
}

export const fetchAllIncome = (state = initialState, action ) => {
   switch(action.type) {
    case 'FETCH_ALL_INCOME':
     return {
      ...state
     }
   }
}