import trailReducer from './trail';
import tripReducer from './trip';
import futureTripReducer from './futureTrip';
import userReducer from './user';
import followReducer from './follow'
import {combineReducers} from 'redux';

export default combineReducers({
  userReducer: userReducer,
  trailReducer: trailReducer,
  tripReducer: tripReducer,
  futureTripReducer: futureTripReducer,
  followReducer: followReducer
});
