import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import lessonReducer from './slices/lessonSlice';

export const store = configureStore({
  reducer: {
    lessons: lessonReducer,
  },
  middleware: [thunk],
});
