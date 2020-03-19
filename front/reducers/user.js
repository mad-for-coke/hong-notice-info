import produce, { finishDraft } from 'immer';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const initialState = {
  User: null,
  isLoggedIn: false, // 로그인되어있나

  isLogginIn: false, // 로그인 중인가
  loginError: '',

  isLoggingOut: false, // 로그아웃 중인가
  logoutError: '',

  isSigningUp: false,
  isSignedUp: false,
  signUpError: '',
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        draft.User = null;
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLoggedIn = true;
        draft.User = action.data;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.isLogginIn = false;
        draft.isLoggedIn = false;
        draft.loginError = action.error;
        break;
      }
      default: {
      }
    }
  });
};

export default reducer;
