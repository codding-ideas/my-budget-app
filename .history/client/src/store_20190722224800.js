import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//root reducer
import rootReducer from './redux/reducers';

const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


const store = createStore(RO, composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;