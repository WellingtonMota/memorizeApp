import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Col,
  Container,
  Content,
  Grid,
  Row,
  Text,
  Thumbnail
} from 'native-base';
import styles from '../../styles/Home';

const logo = require('../../assets/images/logo.png');

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.c_content}>
          <Grid>
            <Row>
              <Col style={styles.c_col_20} />
              <Col style={styles.c_col_60}>
                <Thumbnail large source={logo} style={styles.c_col_thumbmail} />
                <Text style={styles.c_col_title}>Memorize</Text>
                <Button 
                  block
                  warning
                  onPress={() => Actions.login()}
                >
                  <Text>Entrar</Text>
                </Button>
              </Col>
              <Col style={styles.c_col_20} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
