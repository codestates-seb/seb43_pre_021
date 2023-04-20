export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ANSWER = 'ANSWER';
export const ANSWER_UPDATE = 'ANSWER_UPDATE';

export const login = () => ({
  type: 'LOGIN',
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const postAnswer = answer => {
  return {
    type: ANSWER,
    payload: {
      answer,
    },
  };
};

export const updateAnswer = (idx, newAnswer) => {
  return {
    type: ANSWER_UPDATE,
    payload: {
      idx,
      newAnswer,
    },
  };
};
