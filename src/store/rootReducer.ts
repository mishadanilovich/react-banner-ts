import { combineReducers } from '@reduxjs/toolkit';
import bannerSlice from 'containers/Banner/store/slice';

export const createRootReducer = combineReducers({
  plan: bannerSlice,
});
