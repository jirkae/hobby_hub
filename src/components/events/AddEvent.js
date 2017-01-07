import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Alert, Col } from "react-bootstrap";
import { connect } from "react-redux";

import AddEventStep1 from './AddEventStep1.js';
import AddEventStep2 from './AddEventStep2.js';
import AddEventStep3 from './AddEventStep3.js';
import { postEvent, updateEvent } from './../../services/restApi';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class AddEvent extends Component {
  constructor(params) {
    super(params);

    this.state = {
      step: 1,
      event: {}
    };

    this.handleStep1Submit = this.handleStep1Submit.bind(this);
    this.handleStep2Submit = this.handleStep2Submit.bind(this);
    this.handleStep3Submit = this.handleStep3Submit.bind(this);
  }

  handleStep(e, step) {
    e.preventDefault();
    this.setState({
      step: step
    });
  }

  handleStep1Submit(event) {
    const newEvent = Object.assign(this.state.event, event);
    this.setState({
      step: 2,
      event: newEvent
    });
  }

  handleStep2Submit(event) {
    const newEvent = Object.assign(this.state.event, event);
    this.setState({
      step: 3,
      event: newEvent
    });
  }

  handleStep3Submit(event) {
    const newEvent = Object.assign(this.state.event, event);
    let promise;
    if (this.props.event === null) {
      promise = postEvent(newEvent, this.props.user);
    } else {
      promise = updateEvent(newEvent, this.props.user, this.props.event.id);
    }
    promise.then(({data}) => {
      this.setState({
        step: 4,
        event: data
      })
    })
      .catch(); // nechat modální okno otevřené a zobrazit červenou hlášku
  }

  getCurrentStepContent() {
    switch (this.state.step) {
      case 1:
        return <AddEventStep1 onSubmit={this.handleStep1Submit} event={this.props.event} />;
      case 2:
        return <AddEventStep2 onSubmit={this.handleStep2Submit} event={this.props.event} />;
      case 3:
        return <AddEventStep3 onSubmit={this.handleStep3Submit} event={this.props.event} />;
      case 4:
        let successTitle, successText;
        if (this.props.event === null) {
          successTitle = "Událost vytvořena";
          successText = "Úspěšně jsme vytvořili vaši událost. Naleznete ji ve výpisu událostí";
        } else {
          successTitle = "Událost upravena";
          successText = "Úspěšně jsme upravili vaši událost. Naleznete ji ve výpisu událostí";
        }
        return (
          <Col md={12}>
            <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
              <h4>{successTitle}</h4>
              <p>{successText}</p>
            </Alert>
          </Col>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="row">
        <nav className="addEventNav col-md-6 col-md-offset-3">
          <ul>
            <li className={this.state.step === 1 ? 'active' : null}>
              <FontAwesome name="info-circle"></FontAwesome>
              <small>Základní info</small>
            </li>
            <li className={this.state.step === 2 ? 'active' : null}>
              <FontAwesome name="map-marker"></FontAwesome>
              <small>Lokace</small>
            </li>
            <li className={this.state.step === 3 ? 'active' : null}>
              <FontAwesome name="calendar"></FontAwesome>
              <small>Plánování</small>
            </li>
          </ul>
        </nav>
        <div className="addEventContent">
          {this.getCurrentStepContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

AddEvent = connect(
  mapStateToProps
)(AddEvent);

export default AddEvent;
