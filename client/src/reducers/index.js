import { combineReducers } from 'redux';
import { questionSlice } from '../store/questionSlice.js';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';
import { persistReducer } from 'redux-persist';
import { answerReducer } from './answerReducer.js';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['login', 'userinfo', 'answer'],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  login: loginReducer,
  userinfo: userInfoReducer,
  question: questionSlice.reducer,
  answer: answerReducer,
});

export default persistReducer(persistConfig, rootReducer);
