import React, { Component } from 'react';
import { baseUrl } from '../services/restApi.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import MainContent from '../components/layout/MainContent.js';
import AsideContent from '../components/layout/AsideContent.js';
import ParticipantPanel from '../components/events/ParticipantsPanel.js';

export default class EventDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(baseUrl()+"events/" + this.props.params.eventId).then(r => r.json()).then(json => {
      this.setState({data: json})
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
          <h2>{data.name}</h2>
          <span className="info-row"> <span className="date"><i className=" icon-clock"> </i> Datum a čas: Monday, 8 February 2016 </span> - <span className="item-location"><i className="fa fa-map-marker"></i> {data.street}, {data.city}, {data.zipCode} </span> </span>
          <div className="Ads-Details ">
            <div className="row">
              <div className="ads-details-info jobs-details-info col-md-8">
                <p>{data.description}</p>
                <h4 className="text-uppercase ">Detailní popis:</h4>
                <p>{data.detailDescription}</p>
                <h4 className="text-uppercase ">Mapa konání:</h4>
                <iframe className="map" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyCgB3COu0_8KX6bCwzhHRePKn8rbRdybBI&q='+data.street+','+data.city+','+data.zipCode} />
              </div>
              <div className="col-md-4">
                <aside className="panel panel-body panel-details job-summery">
                  <ul>
                    <li><p className=" no-margin "><strong>Cena:</strong> 100 Kč </p></li>
                  </ul>
                </aside>
                <div className="ads-action">
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

  render() {
    return (
      <ContentWrapper>
        <MainContent className="col-sm-9">
          {this.generateContent()}
        </MainContent>
        <AsideContent className="col-sm-3">
          <ParticipantPanel />
        </AsideContent>
      </ContentWrapper>
    );
  }
}
