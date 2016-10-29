import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export class LoginPage extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-xs-3">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formUserName">
            <ControlLabel>Uživatelské jméno</ControlLabel>
            <FormControl type="text"/>
          </FormGroup>
          <FormGroup controlId="formPassword">
            <ControlLabel>Heslo</ControlLabel>
            <FormControl type="password"/>
          </FormGroup>
          <Button bsStyle="primary" type="submit">Log in</Button>
        </form>
      </div>
    )
  }
}