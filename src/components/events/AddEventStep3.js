import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox, Row } from "react-bootstrap"
import Datetime from 'react-datetime';

import '../../../node_modules/react-datetime/css/react-datetime.css';

export default class AddEventStep3 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      event: {
        startDate: '',
        endDate: '',
      },
      errors: []
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleFieldChange(moment, name) {
    let { event } = this.state;
    event[name] = moment;
    this.setState({event: event});
  }

  getValidationState(name) {
    return this.state.errors.indexOf(name) !== -1 ? 'error' : null;
  }

  formSubmit(e) {
    e.preventDefault();

    let {event} = this.state;
    event.startDate = event.startDate.format();
    event.endDate = event.endDate.format();
    var errors = [];

    if (event.endDate === '') {
      errors.push('endDate');
    }

    if (event.startDate === '') {
      errors.push('startDate');
    }

    if (errors.length === 0) {
      this.props.onSubmit(this.state.event);
    } else {
      this.setState({errors: errors});
    }
  }

  render() {
    return(
      <form onSubmit={this.formSubmit}>
        <Row>
          <div className="col-md-4">
            <FormGroup controlId="eventStreet" validationState={this.getValidationState('startDate')}>
              <ControlLabel>Začátek akce</ControlLabel>
              <Datetime locale="cs" value={this.state.event.startDate !== '' ? this.state.event.startDate.format('DD. MM. YYYY h:mm') : ''} onChange={(e) => {this.handleFieldChange(e, 'startDate')}}/>
            </FormGroup>
            <FormGroup controlId="eventCity" validationState={this.getValidationState('endDate')}>
              <ControlLabel>Konec akce</ControlLabel>
              <Datetime locale="cs" value={this.state.event.endDate !== '' ? this.state.event.endDate.format('DD. MM. YYYY h:mm') : ''} onChange={(e) => {this.handleFieldChange(e, 'endDate')}}/>
            </FormGroup>
          </div>
          <div className="col-md-3 col-md-offset-5">
            <Button bsStyle="primary" type="submit">Uložit</Button>
          </div>
        </Row>
      </form>
    );
  }
}
