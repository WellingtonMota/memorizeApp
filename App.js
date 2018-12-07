import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';
import ENV from './src/config/environment/production.env';

import Index from './src';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: ENV.API_KEY,
      authDomain: ENV.AUTH_DOMAIN,
      databaseURL: ENV.DATABASE_URL,
      projectId: ENV.PROJECT_ID,
      storageBucket: ENV.STORAGE_BUCKET,
      messagingSenderId: ENV.MESSAGING_SENDER_ID
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Index />
      </Provider>
    );
  }
}
