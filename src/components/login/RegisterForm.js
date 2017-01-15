import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { registerUser } from './../../services/thunkReducer';
import { connect } from 'react-redux';
import ConditionalErrorLabel from './ConditionalErrorLabel';

const minPassLength = 6;

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passValidationState: null,
      emailValidationState: null,

      firstNameValidationState: null,
      lastNameValidationState: null,

      password: '',  // bez toho to nejede
      firstName: '',
      lastName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSecondPasswordChange = this.handleSecondPasswordChange.bind(this);
    this.validateFormAndCall = this.validateFormAndCall.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  componentWillReceiveProps(newProp) {
      if (this.props !== newProp) {
          this.setState({error: newProp.error});
      }
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {
      email: this.state.email,
      firstName: this.state.firstName,
      password: this.state.password,
        lastName: this.state.lastName
    };

    this.validateFormAndCall(formData);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event){
    this.setState({lastName: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSecondPasswordChange(event) {
    this.setState({secondPassword: event.target.value});
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 8) return 'success';
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

    if(!this.state.firstName){
      this.setState({firstNameValidationState: 'error'});
      valid = false;
    }else {
        this.setState({firstNameValidationState: 'success'});
    }

      if(!this.state.lastName){
          this.setState({lastNameValidationState: 'error'});
          valid = false;
      }else {
        this.setState({lastNameValidationState: 'success'});
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
            <Col sm={8}>
              <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" validationState={this.state.firstNameValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Jméno
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Jméno" onChange={this.handleFirstNameChange} />
              <FormControl.Feedback/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" validationState={this.state.lastNameValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Příjmení
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Příjmení" onChange={this.handleLastNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={3}>
              Heslo
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="Heslo" onChange={this.handlePasswordChange}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPasswordAgain" validationState={this.state.passValidationState}>
            <Col componentClass={ControlLabel} sm={3}>
              Heslo znovu
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="Heslo znovu" onChange={this.handleSecondPasswordChange}/>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={8}>
              <Button bsStyle="primary" type="submit">
                Vytvořit nový účet
              </Button>
            </Col>
          </FormGroup>

          <ConditionalErrorLabel error={this.state.error}/>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
      error: store.modalReducer.error
  };
};

RegisterForm = connect(
  mapStateToProps
)(RegisterForm);

export default RegisterForm;
