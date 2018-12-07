import {
  MODIFY_NAME,
  MODIFY_MAIL,
  MODIFY_PASSWORD,
  MODIFY_CONFIRM_PASSWORD,
  REGISTER_IN_PROGRESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERR
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  mail: '',
  password: '',
  confirmPassword: '',
  registerErr: '',
  registerLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_NAME:
      return { ...state, name: action.payload };
    case MODIFY_MAIL:
      return { ...state, mail: action.payload };
    case MODIFY_PASSWORD:
      return { ...state, password: action.payload };
    case MODIFY_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case REGISTER_USER_ERR:
      return { ...state, registerErr: action.payload, registerLoading: false };
    case REGISTER_USER_SUCCESS:
      return { ...state, name: '', password: '', registerLoading: false };
    case REGISTER_IN_PROGRESS:
      return { ...state, registerLoading: true };

    default:
      return state;
  }
};
