import { ANSWER } from '../actions';

export const answerReducer = (state = { answer: {} }, action) => {
  switch (action.type) {
    case ANSWER:
      return {
        ...state,
        answer: action.payload.answer,
      };
    default:
      return state;
  }
};
