import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'
import restaurant from './restaurant';

const mainReducer = combineReducers({
  routing: routerReducer,
  restaurant,
  ...drizzleReducers
})

export default mainReducer
