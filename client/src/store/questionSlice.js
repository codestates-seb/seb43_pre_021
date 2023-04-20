import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const { title, content } = action.payload;
      const newQuestion = { title, content };
      const newQuestions = [...state.questions, newQuestion];
      state.questions = newQuestions;
    },
    clearQuestions: state => {
      state.questions = [];
    },
  },
});

export const { addQuestion, clearQuestions } = questionSlice.actions;

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});
