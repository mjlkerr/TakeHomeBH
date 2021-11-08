import {createStore} from 'redux';
import rootReducer from './rootReducer';

export default () => {
  return createStore(rootReducer);
};
