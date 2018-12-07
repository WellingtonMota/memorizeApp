import React, { Component } from 'react';
import { Container, Content, Textarea, Form } from 'native-base';
import { CFooter, CHeader } from '../../components/';

export default class AddCard extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');

    return (
      <Container>
        <CHeader propsTitle={title} />
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
        </Content>
        <CFooter propsNavigation={this.props} propsActiveTab={title} />
      </Container>
    );
  }
}
