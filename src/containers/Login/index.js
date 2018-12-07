import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  Container,
  Content,
  Form,
  Grid,
  Icon,
  Item,
  Input,
  Row,
  Text
} from 'native-base';
import CSpinner from '../../components/CSpinner';
import {
  modifyMail,
  modifyPassword
} from '../../actions/FieldsAction';
import {
  userLogin
} from '../../actions/LoginAction';
import styles from '../../styles/Login';

class Login extends Component {
  loginUser() {
    const { 
      mail,
      password
    } = this.props;

    this.props.userLogin({
      mail,
      password
    });
  }

  renderLoadingPage() {
    if (this.props.loginLoading) {
      return (
        <CSpinner />
      );
    }
    return this.renderPage();
  }

  renderPage() {
    return (
      <Grid>
        <Row>
          <Col style={styles.c_col_100}>
            <Icon type='Entypo' name='mail' style={styles.c_logoMailCol} />
          </Col>
        </Row>
        <Row>
          <Col style={styles.c_col_10} />
          <Col style={styles.c_col_80}>
            <Text style={styles.c_messageError}>
              {this.props.loginErr}
            </Text>
            <Form>
              <Item>
                <Icon type='FontAwesome' name='user' active style={styles.c_iconForm} />
                <Input
                  placeholder='Email'
                  value={this.props.mail}
                  onChangeText={value => this.props.modifyMail(value)}
                />
              </Item>
              <Item>
                <Icon type='FontAwesome' name='lock' active style={styles.c_iconForm} />
                <Input
                  placeholder='Senha'
                  value={this.props.password}
                  secureTextEntry
                  onChangeText={value => this.props.modifyPassword(value)}
                />
              </Item>
              <Button block warning onPress={() => this.loginUser()}>
                <Text>Logar</Text>
              </Button >
            </Form>
          </Col>
          <Col style={styles.c_col_10} />
        </Row>
        <Row>
          <Col style={styles.c_colLegend}>
            <Text style={styles.c_textLegend}>Não tem uma conta? Cadastre-se</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.c_col_20} />
          <Col style={styles.c_col_20}>
            <Icon
              type='Entypo'
              name='google--with-circle'
              style={styles.c_iconCircleGoogle}
            />
          </Col>
          <Col style={styles.c_col_20}>
            <Icon
              type='Entypo'
              name='facebook-with-circle'
              style={styles.c_iconCircleFacebook}
            />
          </Col>
          <Col style={styles.c_col_20}>
            <Icon
              type='Entypo'
              name='mail-with-circle'
              style={styles.c_iconCircleMail}
              onPress={() => Actions.register()}
            />
          </Col>
          <Col style={styles.c_col_20} />
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <Container>
        <Content style={styles.c_content}>
          {this.renderLoadingPage()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => (
  {
    mail: state.RegisterReducer.mail,
    password: state.RegisterReducer.password,
    loginErr: state.LoginReducer.loginErr,
    loginLoading: state.LoginReducer.loginLoading
  }
);

export default connect(
  mapStateToProps,
  {
    modifyMail,
    modifyPassword,
    userLogin
  }
)(Login);
