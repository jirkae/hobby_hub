import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import AddEventStep1 from './AddEventStep1.js';
import AddEventStep2 from './AddEventStep2.js';

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
  }


  handleStep(e, step) {
    e.preventDefault();
    this.setState({
      step: step
    });
  }

  handleStep1Submit(event) {
    console.log(event);
    this.setState({step: 2})
  }

  handleStep2Submit(event) {
    console.log(event);
    this.setState({step: 3})
  }

  getCurrentStepContent() {
    switch (this.state.step) {
      case 1:
        return <AddEventStep1 onSubmit = {this.handleStep1Submit}/>;
        break;
      case 2:
        return <AddEventStep2 onSubmit = {this.handleStep2Submit}/>;
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
            <li className={this.state.step == 4 ? 'active' : null}>
              <FontAwesome name="cog"></FontAwesome>
              <small>Upřesnění</small>
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
