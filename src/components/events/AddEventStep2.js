import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox } from "react-bootstrap"

export default class AddEventStep1 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      street: ''
    }

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-4">
          <FormGroup controlId="eventStreet">
            <ControlLabel>Ulice a cp.</ControlLabel>
            <FormControl type="text" value={this.state.street} onChange={(e) => {this.setState({street: e.target.value})}}/>
          </FormGroup>
        </div>
      </div>
    );
  }
}
