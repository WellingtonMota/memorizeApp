import {
  MODIFY_NAME,
  MODIFY_MAIL,
  MODIFY_PASSWORD,
  MODIFY_CONFIRM_PASSWORD
} from './types';

export const modifyName = (value) => ({
  type: MODIFY_NAME,
  payload: value
});

export const modifyMail = (value) => ({
  type: MODIFY_MAIL,
  payload: value
});

export const modifyPassword = (value) => ({
  type: MODIFY_PASSWORD,
  payload: value
});

export const modifyConfirmPassword = (value) => ({
  type: MODIFY_CONFIRM_PASSWORD,
  payload: value
});
