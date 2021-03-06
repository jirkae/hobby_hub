import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col, InputGroup, Glyphicon } from 'react-bootstrap'
import { loginUser } from './../actions/userActionCreators';
import { connect } from 'react-redux';
import ConditionalErrorLabel from './ConditionalErrorLabel';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentWillReceiveProps(newProp) {
    if (this.props !== newProp) {
      this.setState({ error: newProp.error });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {onSuccess} = this.props;

    const formData = this.state;

    if (formData.email && formData.password) {
      this.props.dispatch(loginUser(formData, onSuccess));
    } else {
      this.setState({
        emailValidationState: formData.email ? 'success' : 'error',
        passwordValidationState: formData.password ? 'success' : 'error',
      })
    }
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="formHorizontalEmail" validationState={this.state.emailValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Email*
            </Col>
            <Col sm={7}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" validationState={this.state.passwordValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Heslo*
            </Col>
            <Col sm={7}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                <FormControl type="password" placeholder="Heslo" onChange={this.handlePasswordChange} />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={7}>
              <Button bsStyle="primary" type="submit">
                Přihlásit se
              </Button>
            </Col>
          </FormGroup>

          <ConditionalErrorLabel error={this.state.error} text="Špatné uživatelské jméno nebo heslo" />
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    error: store.modalReducer.error
  }
};

LoginForm = connect(
  mapStateToProps
)(LoginForm);

export default LoginForm;
