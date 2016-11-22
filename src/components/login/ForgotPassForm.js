import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

class ForgotPassForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
            <Col sm={7}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={7}>
              <Button type="submit">
                Resetovat heslo
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }
}

export default ForgotPassForm;
