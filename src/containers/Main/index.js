import React, { Component } from 'react';
import {
  Col,
  Container,
  Content,
  Grid,
  Icon,
  Row,
  Text
} from 'native-base';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#ffda87' }}>
          <Grid>
            <Row>
              <Col style={{ width: '20%' }} />
              <Col style={{ width: '60%', alignItems: 'center', marginVertical: 200 }}>
                <Icon type='Entypo' name='light-bulb' style={{ fontSize: 100, color: '#f76857' }} />
                <Text style={{ color: '#f76857', marginBottom: 40, }}>Main</Text>
              </Col>
              <Col style={{ width: '20%' }} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
