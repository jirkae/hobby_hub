import React, { Component } from 'react';
import { getEventById } from '../services/restApi.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import MainContent from '../components/layout/MainContent.js';
import AsideContent from '../components/layout/AsideContent.js';
import ParticipantPanel from '../components/events/ParticipantsPanel.js';
import moment from 'moment';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { Alert, Col, Row } from "react-bootstrap";

class EventDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getEventById(this.props.params.eventId)
      .then(json => {
        this.setState({ data: json.data })
      }).catch(e => console.log("Error"));
  }

  generateContent() {
    const { data } = this.state;

    if (data === null) {
      return (
        <p>Načítám data...</p>
      );
    } else {
      return (
        <div id="eventDetail">
          <Row>
            <Col md={9}>
              <h2>{data.name}</h2>
            </Col>
            <Col md={3}>
              {this.props.user.id !== undefined && data.ownerId === this.props.user.userId &&
                <Link className="btn btn-block btn-info" to={"/create-event/" + data.id}>Upravit akci</Link>
              }
            </Col>
          </Row>
          <span className="info-row">
            <span className="date"><i className=" icon-clock"> </i> Datum a čas: {moment(data.startDate).format('DD. MM. YYYY h:mm')}- {moment(data.endDate).format('DD. MM. YYYY h:mm')} </span> <br />
            <span className="item-location"><i className="fa fa-map-marker"></i> {data.street}, {data.city}, {data.zipCode} </span> </span>
          <div className="Ads-Details ">
            <div className="row">
              <div className="ads-details-info jobs-details-info col-md-8">
                <p>{data.description}</p>
                <h4 className="text-uppercase ">Detailní popis:</h4>
                <p>{data.detailedDescription}</p>
                <h4 className="text-uppercase ">Mapa konání:</h4>
                <iframe className="map" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyCgB3COu0_8KX6bCwzhHRePKn8rbRdybBI&q=' + data.street + ',' + data.city + ',' + data.zipCode} />
              </div>
              <div className="col-md-4">
                <aside className="panel panel-body panel-details job-summery">
                  <ul>
                    <li><p className=" no-margin "><strong>Cena:</strong> 100 Kč </p></li>
                  </ul>
                </aside>
                <div className="ads-action hide">
                  <ul className="list-border">
                    <li><a href="#" data-toggle="modal"> <i className="fa icon-print"></i> Print job</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  generateAsideContent() {
    const { data } = this.state;

    if (data === null) {
      return (
        <p>Načítám data...</p>
      );
    } else {
      return (
        <ParticipantPanel event={data} />
      );
    }
  }

  render() {
    return (
      <ContentWrapper>
        <MainContent className="col-sm-9">
          {this.generateContent()}
        </MainContent>
        <AsideContent className="col-sm-3">
          {this.generateAsideContent()}
        </AsideContent>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

EventDetailPage = connect(
  mapStateToProps
)(EventDetailPage);

export default EventDetailPage;