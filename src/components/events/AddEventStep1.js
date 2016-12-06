import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Row, Col } from "react-bootstrap"

export default class AddEventStep1 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      event: {
        name: '',
        description: '',
        detailDescription: '',
        participantsMin: 0,
        participantsMax: 0,
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

    if (event.name.length === 0) {
      errors.push('name');
    }

    if (event.description.length === 0) {
      errors.push('description');
    }

    if (event.detailDescription.length === 0) {
      errors.push('detailDescription');
    }

    if (parseInt(event.participantsMin, 10) === 0) {
      errors.push('participantsMin');
    }

    if (parseInt(event.participantsMax, 10) === 0) {
      errors.push('participantsMax');
    }

    if (errors.length === 0) {
      this.props.onSubmit(this.state.event);
    } else {
      this.setState({errors: errors});
    }
  }

  render() {
    return (
        <form onSubmit={this.formSubmit} className="form-horizontal">
          <Col md={12}>

              <fieldset>

                <FormGroup controlId="eventName" validationState={this.getValidationState('name')}>
                  <ControlLabel className="col-md-3 control-label">Název události</ControlLabel>
                  <div className="col-md-8">
                    <FormControl type="text" value={this.state.event.name} onChange={(e) => {this.handleFieldChange(e, 'name')}}/>
                  </div>
                </FormGroup>

                <FormGroup controlId="eventSortDesc" validationState={this.getValidationState('description')}>
                  <ControlLabel className="col-md-3 control-label">Krátký popis</ControlLabel>
                  <div className="col-md-8">
                    <FormControl type="text" value={this.state.event.description} onChange={(e) => {this.handleFieldChange(e, 'description')}}/>
                  </div>
                </FormGroup>

                <FormGroup controlId="eventLongDesc" validationState={this.getValidationState('detailDescription')}>
                  <ControlLabel className="col-md-3 control-label">Dlouhý popis</ControlLabel>
                  <div className="col-md-8">
                    <FormControl componentClass="textarea"
                                 placeholder="Dopište detailní popis události"
                                 value={this.state.event.detailDescription}
                                 onChange={(e) => {this.handleFieldChange(e, 'detailDescription')}}/>{/**/}
                 </div>
                </FormGroup>

                <FormGroup controlId="eventParticipants">
                  <ControlLabel className="col-md-3 control-label">Počet účastníků</ControlLabel>
                  <div className="col-md-8">
                    <Row>
                      <Col md={6}>
                        <Col md={12}>
                          <FormGroup controlId="eventParticipantsMin" validationState={this.getValidationState('participantsMin')}>
                            <FormControl componentClass="select"
                                placeholder="select"
                                onChange={(e) => {this.handleFieldChange(e, 'participantsMin')}}
                                value={this.state.event.participantsMin}>
                              <option value="0">Minimálně</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </FormControl>
                          </FormGroup>
                        </Col>
                      </Col>
                      <Col md={6}>
                        <Col md={12}>
                          <FormGroup controlId="eventParticipantsMax" validationState={this.getValidationState('participantsMax')}>
                            <FormControl componentClass="select"
                                placeholder="select"
                                onChange={(e) => {this.handleFieldChange(e, 'participantsMax')}}
                                value={this.state.event.participantsMax}>
                              <option value="0">Maximálně</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </FormControl>
                          </FormGroup>
                        </Col>
                      </Col>
                    </Row>
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
