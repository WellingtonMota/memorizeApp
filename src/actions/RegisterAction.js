// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from '@firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  REGISTER_IN_PROGRESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERR
} from './types';

export const actionRegisterUser = ({
  name,
  mail,
  password
}) => dispatch => {
  dispatch({ type: REGISTER_IN_PROGRESS });

  firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(() => {
      const mailB64 = b64.encode(mail);

      firebase.database().ref(`/users/${mailB64}`)
        .push({ name })
        .then(() => userRegisterSuccess(dispatch));
    })
    .catch(err => userRegisterErr(err, dispatch));
};

const userRegisterSuccess = (dispatch) => {
  dispatch({ 
    type: REGISTER_USER_SUCCESS
  });

  Actions.login();
};

const userRegisterErr = (err, dispatch) => {
  dispatch({
    type: REGISTER_USER_ERR,
    payload: err.message
  });
};
