import trailReducer from './trail'

import userReducer from './user'

import {combineReducers} from 'redux'

export default combineReducers({
  userReducer: userReducer,
  trailReducer: trailReducer,
})
