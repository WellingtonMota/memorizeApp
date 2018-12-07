// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from '@firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_IN_PROGRESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERR
} from './types';

export const userLogin = ({ mail, password }) => dispatch => {
  dispatch({ type: LOGIN_IN_PROGRESS });

  firebase.auth().signInWithEmailAndPassword(mail, password)
    .then(() => loginUserSucess(dispatch))
    .catch(err => loginUserErr(err, dispatch));
};

const loginUserSucess = (dispatch) => {
  dispatch(
    {
      type: LOGIN_USER_SUCCESS
    }
  );

  Actions.main();
};

const loginUserErr = (err, dispatch) => {
  dispatch(
    {
      type: LOGIN_USER_ERR,
      payload: err.message
    }
  );
};
