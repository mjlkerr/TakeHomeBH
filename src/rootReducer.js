import {combineReducers} from 'redux';
import CalculateReducer from './calculate/reducers/CalculateReducer';

export default combineReducers({
  calculate: CalculateReducer,
});
