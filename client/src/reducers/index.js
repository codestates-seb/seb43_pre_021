import { combineReducers } from 'redux';
import { questionSlice } from '../store/questionSlice.js';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  question: questionSlice.reducer,
});

export default rootReducer;
