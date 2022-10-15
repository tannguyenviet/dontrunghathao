import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from './account/slice'
const createRootReducer = () => {
  return combineReducers({
    account: accountReducer,
  });
};

export default createRootReducer;
