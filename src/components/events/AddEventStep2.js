import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap"

export default class AddEventStep2 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      event: {
        street: '',
        city: '',
        zipCode: ''
      },
      errors: []
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleFieldChange(e, name) {
    let { event } = this.state;
    event[name] = e.target.value;
    this.setState({event: event});
  }

  getValidationState(name) {
    return this.state.errors.indexOf(name) !== -1 ? 'error' : null;
  }

  formSubmit(e) {
    e.preventDefault();

    const {event} = this.state;
    let errors = [];

    if (event.street.length === 0) {
      errors.push('street');
    }

    if (event.city.length === 0) {
      errors.push('city');
    }

    if (event.zipCode.length === 0) {
      errors.push('zipCode');
    }

    if (errors.length === 0) {
      this.props.onSubmit(this.state.event);
    } else {
      this.setState({errors: errors});
    }
  }

  render() {
    return(
      <form onSubmit={this.formSubmit} className="form-horizontal">
        <Col md={12}>
          <fieldset>
            <FormGroup controlId="eventStreet" validationState={this.getValidationState('street')}>
              <ControlLabel className="col-md-3 control-label">Ulice a cp.</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.street} onChange={(e) => {this.handleFieldChange(e, 'street')}}/>
              </div>
            </FormGroup>

            <FormGroup controlId="eventCity" validationState={this.getValidationState('city')}>
              <ControlLabel className="col-md-3 control-label">Město</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.city} onChange={(e) => {this.handleFieldChange(e, 'city')}}/>
              </div>
            </FormGroup>

            <FormGroup controlId="zipCode" validationState={this.getValidationState('zipCode')}>
              <ControlLabel className="col-md-3 control-label">PSČ</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.zipCode} onChange={(e) => {this.handleFieldChange(e, 'zipCode')}}/>
              </div>
            </FormGroup>

            <FormGroup controlId="submit">
              <Col md={2} mdOffset={10}>
                <Button className="pull-right" bsStyle="primary" type="submit">Pokračovat</Button>
              </Col>
            </FormGroup>
          </fieldset>
        </Col>
      </form>
    );
  }
}
