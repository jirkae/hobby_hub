import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Row, Col } from "react-bootstrap";
import TagsSuggestInput from "../other/TagsSuggestInput.js";
import { fetchTags } from '../../services/restApi';

export default class AddEventStep1 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      event: {
        name: '',
        description: '',
        detailedDescription: '',
        participantsMin: 0,
        participantsMax: 0,
        tags: [],
        price: 0
      },
      errors: []
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  componentDidMount() {
    var event = this.state.event;
    if (this.props.event !== null) {
      for (let key in this.state.event) {
        if (typeof this.props.event[key] !== 'undefined') {
          event[key] = this.props.event[key];
        }
      }
      this.setState({ event: event });
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

    if (event.name.length === 0) {
      errors.push('name');
    }

    if (event.description.length === 0) {
      errors.push('description');
    }

    if (event.detailedDescription.length === 0) {
      errors.push('detailedDescription');
    }

    if (!(parseInt(event.participantsMin, 10) > 0)) {
      errors.push('participantsMin');
    }

    if (!(parseInt(event.participantsMax, 10) > 0) || !(parseInt(event.participantsMax, 10) >= parseInt(event.participantsMin, 10))) {
      errors.push('participantsMax');
    }

    if (event.tags.length === 0) {
      errors.push('tags');
    }

    if (!(parseInt(event.price, 10) > 0)) {
      errors.push('price');
    }

    if (errors.length === 0) {
      this.props.onSubmit(this.state.event);
    } else {
      this.setState({ errors: errors });
    }
  }

  handleTagsChange(tags) {
    let { event } = this.state;
    event.tags = tags;
    this.setState({ event: event });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="form-horizontal">
        <Col md={12}>

          <fieldset>

            <FormGroup controlId="eventName" validationState={this.getValidationState('name')}>
              <ControlLabel className="col-md-3 control-label">Název události</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.name} onChange={(e) => { this.handleFieldChange(e, 'name') } } />
              </div>
            </FormGroup>

            <FormGroup controlId="eventTags" validationState={this.getValidationState('tags')}>
              <ControlLabel className="col-md-3 control-label">Štítky akce</ControlLabel>
              <div className="col-md-8">
                <TagsSuggestInput tags={this.state.event.tags} onTagsChange={(tags) => {
                  this.handleTagsChange(tags)
                } }
                  placeholder="štítky" onFetchSuggestionsRequest={fetchTags} />
              </div>
            </FormGroup>

            <FormGroup controlId="eventSortDesc" validationState={this.getValidationState('description')}>
              <ControlLabel className="col-md-3 control-label">Krátký popis</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.description} onChange={(e) => { this.handleFieldChange(e, 'description') } } />
              </div>
            </FormGroup>

            <FormGroup controlId="eventLongDesc" validationState={this.getValidationState('detailedDescription')}>
              <ControlLabel className="col-md-3 control-label">Dlouhý popis</ControlLabel>
              <div className="col-md-8">
                <FormControl componentClass="textarea"
                  placeholder="Dopište detailní popis události"
                  value={this.state.event.detailedDescription}
                  onChange={(e) => { this.handleFieldChange(e, 'detailedDescription') } } />{/**/}
              </div>
            </FormGroup>

            <FormGroup controlId="price" validationState={this.getValidationState('price')}>
              <ControlLabel className="col-md-3 control-label">Cena</ControlLabel>
              <div className="col-md-8">
                <FormControl type="text" value={this.state.event.price} onChange={(e) => { this.handleFieldChange(e, 'price') } } />
              </div>
            </FormGroup>

            <FormGroup controlId="eventParticipants">
              <ControlLabel className="col-md-3 control-label">Počet účastníků</ControlLabel>
              <div className="col-md-8">
                <Row>
                  <Col md={6}>
                    <Col md={12}>
                      <FormGroup controlId="eventParticipantsMin" validationState={this.getValidationState('participantsMin')}>
                        <FormControl type="number" value={this.state.event.participantsMin} onChange={(e) => { this.handleFieldChange(e, 'participantsMin') } } />
                      </FormGroup>
                    </Col>
                  </Col>
                  <Col md={6}>
                    <Col md={12}>
                      <FormGroup controlId="eventParticipantsMax" validationState={this.getValidationState('participantsMax')}>
                        <FormControl type="number" value={this.state.event.participantsMax} onChange={(e) => { this.handleFieldChange(e, 'participantsMax') } } />
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
