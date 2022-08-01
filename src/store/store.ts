import { configureStore, Reducer } from '@reduxjs/toolkit';
import { createRootReducer } from './rootReducer';

const rootReducer: Reducer = (state, action) =>
  createRootReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof createRootReducer>;
