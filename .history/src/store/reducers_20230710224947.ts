import { combineReducers } from 'redux';
import genericReducer from './genericReducer';

export default combineReducers({
    reservations: genericReducer,
};