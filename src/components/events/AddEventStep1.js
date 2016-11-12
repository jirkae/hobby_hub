import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox } from "react-bootstrap"

export default class AddEventStep1 extends Component {
  constructor(params) {
    super(params);

    this.state = {
      name: '',
      description: '',
      detailDescription: '',
      category: '',
      subcategory: '',
      participantsMin: 0,
      participantsMax: 0,
      participantsConfirm: 'on'
    }

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
      <div className="row">
        <form onSubmit={this.formSubmit}>
          <div className="col-md-6">
            <div className='row'>
              <div className="col-md-4">
                <label>Vyberte kategorii:</label>
              </div>
              <div className="col-md-4">
                <FormGroup controlId="eventCategory">
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.setState({category: e.target.value})}}
                      value={this.state.category}>
                    <option value="outdoor">Venkovní</option>
                    <option value="indoor">Vnitřní</option>
                  </FormControl>
                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup controlId="eventSubcategory">
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.setState({subcategory: e.target.value})}}
                      value={this.state.subcategory}>
                    <option value="sport1">Sport 1</option>
                    <option value="sport2">Sport 2</option>
                  </FormControl>
                </FormGroup>
              </div>
            </div>

            <FormGroup controlId="eventName">
              <ControlLabel>Název události</ControlLabel>
              <FormControl type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
            </FormGroup>

            <FormGroup controlId="eventSortDesc">
              <ControlLabel>Krátký popis</ControlLabel>
              <FormControl type="text" value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}}/>
            </FormGroup>

            <FormGroup controlId="eventLongDesc">
              <ControlLabel>Dlouhý popis</ControlLabel>
              <FormControl componentClass="textarea"
                           placeholder="Dopište detailní popis události"
                           value={this.state.detailDescription}
                           onChange={(e) => {this.setState({detailDescription: e.target.value})}}/>{/**/}
            </FormGroup>

          </div>
          <div className="col-md-3">
            <div className='row'>
              <div className="col-md-6">
                <FormGroup controlId="eventParticipantsMin">
                  <ControlLabel>Min účastníků</ControlLabel>
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.setState({participantsMin: e.target.value})}}
                      value={this.state.participantsMin}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </FormControl>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup controlId="eventParticipantsMax">
                  <ControlLabel>Max účastníků</ControlLabel>
                  <FormControl componentClass="select"
                      placeholder="select"
                      onChange={(e) => {this.setState({participantsMax: e.target.value})}}
                      value={this.state.participantsMax}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </FormControl>
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Checkbox
                  onChange={(e) => {this.setState({participantsConfirm: e.target.value})}}>
                Schvalování přihlášek
              </Checkbox>
            </FormGroup>
          </div>
          <div className="col-md-3">
            <Button bsStyle="primary" type="submit">Pokračovat</Button>
          </div>
        </form>
      </div>
    );
  }
}
