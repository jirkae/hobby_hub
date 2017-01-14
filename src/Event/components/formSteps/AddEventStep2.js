import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap";
import TagsSuggestInput from "./../../../Base/components/TagsSuggestInput";
import { fetchCities } from './../../../Base/services/restApi';

export default class AddEventStep2 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      event: {
        street: '',
        city: '',
        zipCode: ''
      },
      cities: [],
      errors: []
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  componentDidMount() {
    let event = this.state.event;
    if (this.props.event !== null) {
      for (let key in this.state.event) {
        if (typeof this.props.event[key] !== 'undefined') {
          event[key] = this.props.event[key];
        }
      }
      this.setState({ event: event }, () => {
        this.setState({cities: [this.state.event.city]});
      });
    }
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

    if (event.zipCode.length === 0) {
      errors.push('zipCode');
    }

    if(this.state.cities.length === 0)
    {
      errors.push('cities');
    }

    if (errors.length === 0) {
      let eventWithCity = {};
      Object.assign(eventWithCity, event);
      eventWithCity.city = this.state.cities[0];

      this.props.onSubmit(eventWithCity);
    } else {
      this.setState({errors: errors});
    }
  }

  handleCitiesChange(cities) {
    this.setState({ cities: cities });
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

            <FormGroup controlId="citiesTags" validationState={this.getValidationState('cities')}>
              <ControlLabel className="col-md-3 control-label">Město</ControlLabel>
              <div className="col-md-8">
                <TagsSuggestInput tags={this.state.cities} onTagsChange={(cities) => {
                  this.handleCitiesChange(cities)
                } }
                  placeholder="město" onFetchSuggestionsRequest={fetchCities} />
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
