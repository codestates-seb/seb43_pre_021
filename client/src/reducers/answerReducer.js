import { ANSWER } from '../actions';

const initialState = {
  answers: [],
};

export const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload.answer],
      };
    default:
      return state;
  }
};
