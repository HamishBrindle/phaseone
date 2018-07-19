import { combineReducers } from 'redux'
import navigation from './navigation'

/**
 * Reducers need to be combined into one for Redux to process them
 */
const reducers = combineReducers({
    navigation
  });
  
export default reducers