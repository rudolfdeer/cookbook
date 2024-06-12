import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
