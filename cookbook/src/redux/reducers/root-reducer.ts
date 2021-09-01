import { combineReducers } from 'redux';
import cookbooksReducer from './cookbooks-reducer';
import recipesReducer from './recipes-reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  cookbooks: cookbooksReducer,
});

export default rootReducer;
