import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/counterSlice';
import darkModeReducer from './slices/darkMode/darkModeSlice'
import boxReducer from './slices/sceneControls/boxSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer,
    box: boxReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
