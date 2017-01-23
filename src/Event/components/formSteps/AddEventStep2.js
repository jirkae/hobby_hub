/* global google */

import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap";
import TagsSuggestInput from "./../../../Base/components/TagsSuggestInput";
import { fetchCities } from './../../../Base/services/restApi';


class AddEventStep2 extends Component {
  geocoder = null;

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
    if (typeof google !== 'undefined') {
      this.geocoder = new google.maps.Geocoder();
    }
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
        if (this.state.event.city !== undefined && this.state.event.city.length > 0) {
          this.setState({ cities: [this.state.event.city] });
        }
      });
    }
  }

  handleFieldChange(e, name) {
    let { event } = this.state;
    event[name] = e.target.value;
    this.setState({ event: event });
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

    if (this.state.cities.length !== 1) {
      errors.push('cities');
    }

    if (errors.length !== 0) {
      this.setState({ errors: this.errors });
    }

    if (errors.length === 0 && typeof this.geocoder !== 'undefined') {
      this.geocoder.geocode({ 'address': event.street + ', ' + this.state.cities[0] }, (results, status) => {

        if (status === google.maps.GeocoderStatus.OK) {
          let eventWithCity = {};
          Object.assign(eventWithCity, this.state.event);
          eventWithCity.city = this.state.cities[0];
          eventWithCity.lat = results[0].geometry.location.lat();
          eventWithCity.lng = results[0].geometry.location.lng();

          this.props.onSubmit(eventWithCity);
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
          var errors = [];
          errors.push('street');
          errors.push('zipCode');
          errors.push('cities');
          this.setState({ errors: errors });
        }
      });
    }
  }

  handleCitiesChange(cities) {
    this.setState({ cities: cities });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="form-horizontal">
        <Col md={12}>
          <fieldset>
            <FormGroup controlId="eventStreet" validationState={this.getValidationState('street')}>
              <ControlLabel className="col-md-3 control-label">Ulice a cp.</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.street} onChange={(e) => { this.handleFieldChange(e, 'street') } } />
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
                <FormControl type="text" value={this.state.event.zipCode} onChange={(e) => { this.handleFieldChange(e, 'zipCode') } } />
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

AddEventStep2.propTypes = {
    event: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AddEventStep2;