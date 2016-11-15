import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { registerUser } from './../../services/thunkReducer';
import { connect } from 'react-redux';

const minPassLength = 6;

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passValidationState: null,
      emailValidationState: null,
      password: ''  // bez toho to nejede
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSecondPasswordChange = this.handleSecondPasswordChange.bind(this);
    this.validateFormAndCall = this.validateFormAndCall.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    };

    this.validateFormAndCall(formData);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSecondPasswordChange(event) {
    this.setState({secondPassword: event.target.value});
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 7) return 'success';
    else if (length >= minPassLength) return 'warning';
    else if (length > 0) return 'error';
  }

  validateFormAndCall(formData) {
    let valid = true;

    if (!this.state.email) {
      this.setState({emailValidationState: 'error'});
      valid = false;
    } else {
      this.setState({emailValidationState: null});
    }

    if (this.state.password !== this.state.secondPassword || minPassLength > this.state.password.length) {
      this.setState({passValidationState: 'error'});
      valid = false;
    } else {
      this.setState({passValidationState: null});
    }

    if (valid) {
      this.props.dispatch(registerUser(formData));
    }
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="formHorizontalEmail" validationState={this.state.emailValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Email
            </Col>
            <Col sm={9}>
              <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" onChange={this.handleNameChange}>
            <Col componentClass={ControlLabel} sm={3}>
              Jméno a příjmení
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Jméno a příjmení" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={3}>
              Heslo
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Heslo" onChange={this.handlePasswordChange}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPasswordAgain" validationState={this.state.passValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Heslo znovu
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Heslo znovu" onChange={this.handleSecondPasswordChange}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={9}>
              <Button bsStyle="primary" type="submit">
                Vytvořit nový účet
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegisterForm = connect()(RegisterForm);
