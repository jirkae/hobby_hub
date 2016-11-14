import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap"
import AddEvent from "../components/events/AddEvent.js";

export default class EventsCreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitData();

    this.formSubmit = this.formSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDetailDescriptionChange = this.handleDetailDescriptionChange.bind(this);
  }

  getInitData() {
    return {
      name: '',
      description: '',
      detailDescription: ''
    };
  }

  clearForm() {
    this.setState(this.getInitData());
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  handleDetailDescriptionChange(e) {
    this.setState({detailDescription: e.target.value})
  }

  formSubmit(e) {
    e.preventDefault();
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
    http.send(JSON.stringify(params));
  }

  render() {
    const setName = this.setName;
    return (
      <div className="createEvent">
        <AddEvent />
      </div>
    );
  }
}
