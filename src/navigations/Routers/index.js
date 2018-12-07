import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AddCard, Cards, Config, Home, Login, Main, Register } from '../../containers/';

export default () => (
  <Router>
    <Scene key='root'>
      <Scene
        key='home'
        component={Home}
        hideNavBar
      />
      <Scene
        key='AddCard'
        component={AddCard}
        hideNavBar
      />
      <Scene
        key='cards'
        component={Cards}
        hideNavBar
      />
      <Scene
        key='config'
        component={Config}
        hideNavBar
      />
      <Scene
        key='login'
        component={Login}
        hideNavBar
      />
      <Scene
        key='main'
        component={Main}
        hideNavBar
      />
      <Scene
        key='register'
        component={Register}
        hideNavBar
      />
    </Scene>
  </Router>
);
