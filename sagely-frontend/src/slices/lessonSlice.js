import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lessons: [
        {
            id: "",
            url: "",
            manualTags: "",
            abstractNote: "",
            date: "",
            dateAdded: "",
            dateModified: "",
            accessDate: "",
            key: "",
            itemType: "",
            publicationYear: "",
            author: "",
            title: "",
        }
    ],
    selectedLesson: {
        id: "",
        url: "",
        manualTags: "",
        abstractNote: "",
        date: "",
        dateAdded: "",
        dateModified: "",
        accessDate: "",
        key: "",
        itemType: "",
        publicationYear: "",
        author: "",
        title: "",
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
