import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherReducer from './features/weatherSlice';

const store = configureStore({
  reducer: {
    weathers: weatherReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;