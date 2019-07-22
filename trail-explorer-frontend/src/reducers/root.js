import trailReducer from './trail';
import tripReducer from './trip';
import futureTripReducer from './futureTrip';
import followReducer from './follow'
import {combineReducers} from 'redux';

export default combineReducers({
  trail: trailReducer,
  trip: tripReducer,
  future_trip: futureTripReducer,
  follow: followReducer
});