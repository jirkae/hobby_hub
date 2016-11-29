import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, Row, Col } from "react-bootstrap";
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
    };

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
      <form onSubmit={this.formSubmit} className="form-horizontal">
        <Col md={12}>
          <fieldset>
            <FormGroup controlId="eventStreet" validationState={this.getValidationState('startDate')}>
              <ControlLabel className="col-md-3 control-label">Začátek akce</ControlLabel>
              <div className="col-md-8">
                <Datetime locale="cs" value={this.state.event.startDate !== '' ? this.state.event.startDate.format('DD. MM. YYYY h:mm') : ''} onChange={(e) => {this.handleFieldChange(e, 'startDate')}}/>
              </div>
            </FormGroup>

            <FormGroup controlId="eventCity" validationState={this.getValidationState('endDate')}>
              <ControlLabel className="col-md-3 control-label">Konec akce</ControlLabel>
              <div className="col-md-8">
                <Datetime locale="cs" value={this.state.event.endDate !== '' ? this.state.event.endDate.format('DD. MM. YYYY h:mm') : ''} onChange={(e) => {this.handleFieldChange(e, 'endDate')}}/>
              </div>
            </FormGroup>

            <FormGroup controlId="submit">
              <Col md={2} mdOffset={10}>
                <Button className="pull-right" bsStyle="primary" type="submit">Vytvořit</Button>
              </Col>
            </FormGroup>
          </fieldset>
        </Col>
      </form>
    );
  }
}
