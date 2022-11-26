import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lessons: [],
    selectedLesson: {

    }
};

export const lessonSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload;
    },
      setSelectedLesson: (state, action) => {
        state.selectedLesson = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {setLessons, setSelectedLesson } = lessonSlice.actions;

export default lessonSlice.reducer;
