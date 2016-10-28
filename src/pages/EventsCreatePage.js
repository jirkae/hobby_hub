import React, { Component } from 'react';

export class EventsCreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitData();
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
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            
            that.clearForm();
        }
    };
    http.send(JSON.stringify(params));
  }

  render() {
    const setName = this.setName;
    return (
      <div className="createEvent">
        <form onSubmit={this.formSubmit.bind(this)}>
          <label htmlFor="eventName">Název eventu</label><br />
          <input id="eventName" type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} /><br />

          <label htmlFor="shortDesc">Krátký popis</label><br />
          <input id="shortDesc" type="text" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} /><br />

          <label htmlFor="longDesc">Dlouhý popis</label><br />
          <textarea id="longDesc" onChange={this.handleDetailDescriptionChange.bind(this)} value={this.state.detailDescription}></textarea><br />

          <input type="submit" value="přidat" />
        </form>
      </div>
    );
  }
}
