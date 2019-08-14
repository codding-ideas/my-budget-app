import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//root reducer
//import rootReducer from './reducers';

const initialState = {}

const middleware = [thunk];

const store = createStore((() => {}), initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;