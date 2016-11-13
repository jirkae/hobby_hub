import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox, Row } from "react-bootstrap"

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
    }

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
    var errors = [];

    if (event.name.length === 0) {
      errors.push('name');
    }

    if (event.description.length === 0) {
      errors.push('description');
    }

    if (event.detailDescription.length === 0) {
      errors.push('detailDescription');
    }

    if (parseInt(event.participantsMin) == 0) {
      errors.push('participantsMin');
    }

    if (parseInt(event.participantsMax) == 0) {
      errors.push('participantsMax');
    }

    if (errors.length === 0) {
      this.props.onSubmit(this.state.event);
    } else {
      this.setState({errors: errors});
    }
    /*
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/api/events";
    var params = {
      name: this.state.name,
      description: this.state.description,
      detailDescription: this.state.detailDescription,
    };
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    var that = this;
    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {

        that.clearForm();
      }
    };
    http.send(JSON.stringify(params));*/
  }

  render() {
    return (
      <Row>
        <form onSubmit={this.formSubmit}>
          <div className="col-md-6">


            <FormGroup controlId="eventName" validationState={this.getValidationState('name')}>
              <ControlLabel>Název události</ControlLabel>
              <FormControl type="text" value={this.state.event.name} onChange={(e) => {this.handleFieldChange(e, 'name')}}/>
            </FormGroup>

            <FormGroup controlId="eventSortDesc" validationState={this.getValidationState('description')}>
              <ControlLabel>Krátký popis</ControlLabel>
              <FormControl type="text" value={this.state.event.description} onChange={(e) => {this.handleFieldChange(e, 'description')}}/>
            </FormGroup>

            <FormGroup controlId="eventLongDesc" validationState={this.getValidationState('detailDescription')}>
              <ControlLabel>Dlouhý popis</ControlLabel>
              <FormControl componentClass="textarea"
                           placeholder="Dopište detailní popis události"
                           value={this.state.event.detailDescription}
                           onChange={(e) => {this.handleFieldChange(e, 'detailDescription')}}/>{/**/}
            </FormGroup>

          </div>
          <div className="col-md-3">
            <div className='row'>
              <div className="col-md-6">
                <FormGroup controlId="eventParticipantsMin" validationState={this.getValidationState('participantsMin')}>
                  <ControlLabel>Min účastníků</ControlLabel>
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.handleFieldChange(e, 'participantsMin')}}
                      value={this.state.event.participantsMin}>
                    <option value="0">Vyberte</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </FormControl>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup controlId="eventParticipantsMax" validationState={this.getValidationState('participantsMax')}>
                  <ControlLabel>Max účastníků</ControlLabel>
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.handleFieldChange(e, 'participantsMax')}}
                      value={this.state.event.participantsMax}>
                    <option value="0">Vyberte</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </FormControl>
                </FormGroup>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Button bsStyle="primary" type="submit">Pokračovat</Button>
          </div>
        </form>
      </Row>
    );
  }
}

/*
<div className='row'>
  <div className="col-md-4">
    <label>Vyberte kategorii:</label>
  </div>
  <div className="col-md-4">
    <FormGroup controlId="eventCategory">
      <FormControl componentClass="select"
          placeholder="select"
          onChange={(e) => {this.handleFieldChange(e, 'category')}}
          value={this.state.event.category}>
        <option value="outdoor">Venkovní</option>
        <option value="indoor">Vnitřní</option>
      </FormControl>
    </FormGroup>
  </div>
  <div className="col-md-4">
    <FormGroup controlId="eventSubcategory">
      <FormControl componentClass="select"
          placeholder="select"
          onChange={(e) => {this.handleFieldChange(e, 'subcategory')}}
          value={this.state.event.subcategory}>
        <option value="sport1">Sport 1</option>
        <option value="sport2">Sport 2</option>
      </FormControl>
    </FormGroup>
  </div>
</div>

<FormGroup>
  <Checkbox
      onChange={(e) => {this.handleFieldChange(e, 'participantsConfirm')}}>
    Schvalování přihlášek
  </Checkbox>
</FormGroup>

*/
