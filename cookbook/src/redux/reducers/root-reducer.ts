import { combineReducers } from 'redux';
import cookbooksReducer from './cookbooks-reducer';
import recipesReducer from './recipes-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  cookbooks: cookbooksReducer,
  user: userReducer,
});

export default rootReducer;
