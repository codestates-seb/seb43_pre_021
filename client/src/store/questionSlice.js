import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setTitle, setContent } = questionSlice.actions;

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});
