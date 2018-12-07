import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Spinner from 'react-native-spinkit';
import styles from '../../styles/Components';

export default class CGrid extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col style={styles.c_spinner}>
            <Spinner
              isVisible
              size={100}
              type='Plane'
              color='#f76857'
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
