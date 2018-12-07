import {
  LOGIN_IN_PROGRESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERR
} from '../actions/types';

const INITIAL_STATE = {
  loginErr: '',
  loginLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_ERR:
      return { ...state, loginErr: action.payload, loginLoading: false };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case LOGIN_IN_PROGRESS:
      return { ...state, loginLoading: true };

    default:
      return state;
  }
};
