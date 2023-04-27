import { combineReducers } from 'redux';
import searchReducer from '../store/searchSlice.js';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';
import { persistReducer } from 'redux-persist';
import { answerReducer } from './answerReducer.js';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'userinfo', 'answer', 'search'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  userinfo: userInfoReducer,
  search: searchReducer,
  answer: answerReducer,
});

export default persistReducer(persistConfig, rootReducer);
