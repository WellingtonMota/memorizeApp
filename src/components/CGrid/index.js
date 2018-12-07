import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class CGrid extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
          <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
          <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
        </Row>
      </Grid>
    );
  }
}
