import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { loginUser } from './../../services/thunkReducer';
import {connect} from 'react-redux';

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

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.state;

    if(formData.email && formData.password){
      this.props.dispatch(loginUser(formData))
        .catch(error => {
          // reagovat na případ, že se nepodaří přihlásit se
        })
    }
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Email
            </Col>
            <Col sm={9}>
              <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Heslo
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Heslo" onChange={this.handlePasswordChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={9}>
              <Button bsStyle="primary" type="submit">
                Přihlásit se
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default LoginForm = connect()(LoginForm);
