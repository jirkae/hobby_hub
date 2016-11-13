import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Alert } from "react-bootstrap"

import AddEventStep1 from './AddEventStep1.js';
import AddEventStep2 from './AddEventStep2.js';
import AddEventStep3 from './AddEventStep3.js';
import { postEvent } from './../../services/restApi';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class AddEvent extends Component {
  constructor(params) {
    super(params);

    this.state = {
      step: 1,
      event: {}
    }

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
    })
    console.log(this.state.event);
  }

  handleStep2Submit(event) {
    const newEvent = Object.assign(this.state.event, event);
    this.setState({
      step: 3,
      event: newEvent
    })
    console.log(this.state.event);
  }

  handleStep3Submit(event) {
    const newEvent = Object.assign(this.state.event, event);
    console.log(newEvent);
    postEvent(newEvent)
      .then(({data}) => {
          console.log(data);
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
        return <AddEventStep1 onSubmit = {this.handleStep1Submit}/>;
        break;
      case 2:
        return <AddEventStep2 onSubmit = {this.handleStep2Submit}/>;
        break;
      case 3:
        return <AddEventStep3 onSubmit = {this.handleStep3Submit}/>;
        break;
      case 4:
        return (
          <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
            <h4>Událost vytvořena</h4>
            <p>Úspěšně jsme vytvořili vaši událost. Naleznete ji ve výpisu událostí</p>
          </Alert>
        )
        break;
      default:
        return null;
    }
  }

  render() {
    const { step, event } = this.state;

    return (
      <div className="row">
        <nav className="addEventNav col-md-6 col-md-offset-3">
          <ul>
            <li className={this.state.step == 1 ? 'active' : null}>
              <FontAwesome name="info-circle"></FontAwesome>
              <small>Základní info</small>
            </li>
            <li className={this.state.step == 2 ? 'active' : null}>
              <FontAwesome name="map-marker"></FontAwesome>
              <small>Lokace</small>
            </li>
            <li className={this.state.step == 3 ? 'active' : null}>
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
