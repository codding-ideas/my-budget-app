import { SET_ALERT, REMOVE_ALERT} from '../actions/types'



const initialState = []
//Reducer takes state and action

export default function(state = initialState, action){

    //Destructuring from Action
    const { type, payload } = action;
    switch(type) {
        case SET_ALERT:
            return [...state, payload];
            case REMOVE_ALERT:
                return state.filter(alert => alert.id  !==  payload);
                default:
                    return state

    }
}