import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
