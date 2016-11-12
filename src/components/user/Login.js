import React, {Component} from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Col, Row } from 'react-bootstrap'

export default class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();
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
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={9}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    );
  }
}
