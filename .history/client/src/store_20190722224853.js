import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//root reducer
import rootReducer from './redux/reducers';




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;