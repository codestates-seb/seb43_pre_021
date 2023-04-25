import { ANSWER, ANSWER_UPDATE, ANSWER_DELETE } from '../actions';

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

    case ANSWER_UPDATE: {
      const { idx, newAnswer } = action.payload;
      const updatedAnswers = [...state.answers];
      updatedAnswers[idx] = newAnswer;
      return { ...state, answers: updatedAnswers };
    }

    case ANSWER_DELETE: {
      const { idx } = action.payload;
      const updatedAnswers = [...state.answers];
      updatedAnswers.splice(idx, 1);
      return { ...state, answers: updatedAnswers };
    }
    default:
      return state;
  }
};
