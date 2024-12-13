import { configureStore } from '@reduxjs/toolkit';
import savedReducer from './savedNews';

export const store = configureStore({
  reducer: {
    saved: savedReducer
  }
});