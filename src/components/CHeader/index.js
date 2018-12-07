import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';

export default class CHeader extends Component {
  render() {
    return (
      <Header>
        <StatusBar hidden />
        <Body>
          <Title>{this.props.propsTitle}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    );
  }
}
