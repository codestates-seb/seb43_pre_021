import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  userinfo: userInfoReducer,
});

export default rootReducer;
