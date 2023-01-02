import { createStore, compose } from 'redux';
import profileReducer from './profile/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(profileReducer, composeEnhancers());

export default store;