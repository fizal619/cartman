import { combineReducers } from 'redux'
import nav from './reducers/navReducer'
import anime from './reducers/animeReducer'

export default combineReducers({
  nav,
  anime
});