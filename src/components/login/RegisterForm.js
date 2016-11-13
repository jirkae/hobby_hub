import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { postRegister } from './../../services/restApi';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.state;

    postRegister(formData)
      .then(({data}) => {
        // zavřít modální okno a zobrazit zelenou hlášku
      })
      .catch(); // nechat modální okno otevřené a zobrazit červenou hlášku
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
              <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Jméno
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Jméno" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Příjmení
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Příjmení" />
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
              <Button type="submit">
                Registrovat
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegisterForm;
