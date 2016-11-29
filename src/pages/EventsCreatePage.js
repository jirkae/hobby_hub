import React, { Component } from 'react';
import AddEvent from "../components/events/AddEvent.js";
import ContentWrapper from '../components/layout/ContentWrapper.js';
import MainContent from '../components/layout/MainContent.js';
import Panel from '../components/layout/Panel.js';
import AsideContent from '../components/layout/AsideContent.js';

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
      if (http.readyState === 4 && http.status === 200) {

        that.clearForm();
      }
    };
    http.send(JSON.stringify(params));
  }

  render() {
    return (
      <ContentWrapper>
        <MainContent className="col-sm-9">
          <div className="createEvent">
            <h2 className="title-2 uppercase"><strong> <i className="icon-briefcase"></i> Přidat akci </strong></h2>
            <AddEvent />
          </div>
        </MainContent>
        <AsideContent className="col-sm-3">
          <div className="text-center">
            <div className="promo-text-box"><i className=" icon-lamp fa fa-4x icon-color-1"></i>
              <h3><strong>Effective Job Postings </strong></h3>
              <p> The difference between finding mediocre candidates and extraordinary candidates for your
              clients is a good job posting. </p>
            </div>
            <Panel heading="Tipy">
              <ul className="list-check">
              <li> Add Keywords</li>
              <li> Use Familiar Job Titles</li>
              <li> Give Them Details</li>
              <li> Expand Your Location</li>
              <li> Easy Read Postings</li>
              <li> Keep it simple and expected</li>
              </ul>
            </Panel>
          </div>
        </AsideContent>
      </ContentWrapper>
    );
  }
}
