import React, { Component } from 'react';
import { Container, Content, Accordion } from 'native-base';
import { CFooter, CHeader } from '../../components/';

const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
];

export default class Config extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');

    return (
      <Container>
        <CHeader propsTitle={title} />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#ddecf8' }}
          />
        </Content>
        <CFooter propsNavigation={this.props} propsActiveTab={title} />
      </Container>
    );
  }
}
