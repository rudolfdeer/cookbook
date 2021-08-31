import { combineReducers } from 'redux';

import recipesOperations from './recipes-operations';

const rootReducer = combineReducers({
  recipesOperations,
});

export default rootReducer;
