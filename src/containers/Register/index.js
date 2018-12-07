import React, { Component } from 'react';
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
  modifyName,
  modifyMail,
  modifyPassword,
  modifyConfirmPassword
} from '../../actions/FieldsAction';
import {
  actionRegisterUser
} from '../../actions/RegisterAction';
import styles from '../../styles/Register';

class Register extends Component {
  registerUser() {
    const {
      name,
      mail,
      password,
      confirmPassword
    } = this.props;

    this.props.actionRegisterUser({
      name,
      mail,
      password,
      confirmPassword
    });
  }

  validateNameError() {
    return (
      (this.props.name !== '' && this.props.name.length < 3) ||
      this.props.name.length > 15
    );
  }

  validateMailError() {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return !pattern.test(String(this.props.mail).toLowerCase()) && this.props.mail !== '';
  }

  validatePasswordError() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return !pattern.test(this.props.password) && this.props.password !== '';
  }

  validateConfirmPasswordError() {
    return this.props.confirmPassword !== this.props.password && this.props.confirmPassword !== '';
  }

  renderIconNameError() {
    if (this.validateNameError()) {
      return (
        <Icon type='MaterialCommunityIcons' name='alert-circle' />
      );
    }
  }

  renderIconMailError() {
    if (this.validateMailError()) {
      return (
        <Icon type='MaterialCommunityIcons' name='alert-circle' />
      );
    }
  }

  renderIconPasswordError() {
    if (this.validatePasswordError()) {
      return (
        <Icon type='MaterialCommunityIcons' name='alert-circle' />
      );
    }
    if (this.props.confirmPassword === this.props.password && this.props.confirmPassword !== '') {
      return (
        <Icon type='MaterialCommunityIcons' name='check-circle' style={styles.c_iconCheck} />
      );
    }
  }

  renderIconConfirmPasswordError() {
    if (this.validateConfirmPasswordError()) {
      return (
        <Icon type='MaterialCommunityIcons' name='alert-circle' />
      );
    }
    if (this.props.confirmPassword === this.props.password && this.props.confirmPassword !== '') {
      return (
        <Icon type='MaterialCommunityIcons' name='check-circle' style={styles.c_iconCheck} />
      );
    }
  }

  renderMessageNameError() {
    if (this.validateNameError()) {
      return (
        <Text style={styles.c_message}>Número de caractéres mínimo de 3 e máximo de 10</Text>
      );
    }
  }

  renderMessageMailError() {
    if (this.validateMailError()) {
      return (
        <Text style={styles.c_message}>Email inválido</Text>
      );
    }
  }

  renderMessagePasswordError() {
    if (this.validatePasswordError()) {
      return (
        <Text style={styles.c_message}>
          Senha inválida: Deve conter oito caractéres e digitos minúsculo e maiúsculo
        </Text>
      );
    }
  }

  renderMessageConfirmPasswordError() {
    if (this.validateConfirmPasswordError()) {
      return (
        <Text style={styles.c_message}>
          Senha inválida: não confere com à anterior
        </Text>
      );
    }
  }

  renderLoadingPage() {
    if (this.props.registerLoading) {
      return (
        <CSpinner />
      );
    }
    return this.renderPage();
  }

  renderButton() {
    if (
      this.props.name === '' || this.validateNameError() ||
      this.props.mail === '' || this.validateMailError() ||
      this.props.password === '' || this.validatePasswordError() ||
      this.props.confirmPassword === '' || this.validateConfirmPasswordError()
    ) {
      return (
        <Button block disabled light>
          <Text>Cadastrar</Text>
        </Button>
      );
    }
    return (
      <Button block warning onPress={() => this.registerUser()}>
        <Text>Cadastrar</Text>
      </Button>
    );
  }

  renderPage() {
    return (
      <Grid>
        <Row>
          <Col style={styles.c_logoMailCol}>
            <Icon type='Entypo' name='mail' style={styles.c_logoMailIcon} />
          </Col>
        </Row>
        <Row>
          <Col style={styles.c_col_10} />
          <Col style={styles.c_col_80}>
            <Form>
              <Item error={this.validateNameError()}>
                <Icon type='FontAwesome' name='user' active style={styles.c_icon} />
                <Input
                  placeholder='Nome'
                  value={this.props.name}
                  onChangeText={value => this.props.modifyName(value)}
                />
                {this.renderIconNameError()}
              </Item>
              {this.renderMessageNameError()}

              <Item error={this.validateMailError()}>
                <Icon type='Entypo' name='mail' active style={styles.c_icon} />
                <Input
                  placeholder='E-mail'
                  value={this.props.mail}
                  onChangeText={value => this.props.modifyMail(value)}
                />
                {this.renderIconMailError()}
              </Item>
              {this.renderMessageMailError()}

              <Item error={this.validatePasswordError()}>
                <Icon type='FontAwesome' name='unlock-alt' active style={styles.c_icon} />
                <Input
                  placeholder='Senha'
                  value={this.props.password}
                  secureTextEntry
                  onChangeText={value => this.props.modifyPassword(value)}
                />
                {this.renderIconPasswordError()}
              </Item>
              {this.renderMessagePasswordError()}

              <Item error={this.validateConfirmPasswordError()}>
                <Icon type='FontAwesome' name='lock' active style={styles.c_icon} />
                <Input
                  placeholder='Confirmar senha'
                  value={this.props.confirmPassword}
                  secureTextEntry
                  onChangeText={value => this.props.modifyConfirmPassword(value)}
                />
                {this.renderIconConfirmPasswordError()}
              </Item>
              {this.renderMessageConfirmPasswordError()}

              {this.renderButton()}
            </Form>
          </Col>
          <Col style={styles.c_col_10} />
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
    name: state.RegisterReducer.name,
    mail: state.RegisterReducer.mail,
    password: state.RegisterReducer.password,
    confirmPassword: state.RegisterReducer.confirmPassword,
    registerLoading: state.RegisterReducer.registerLoading
  }
);

export default connect(
  mapStateToProps,
  {
    modifyName,
    modifyMail,
    modifyPassword,
    modifyConfirmPassword,
    actionRegisterUser
  }
)(Register);
