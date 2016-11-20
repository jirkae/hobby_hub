import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { baseUrl } from '../services/restApi.js';

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

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div id="eventDetail">
        <div className="row">
          <div className="col-md-3">
            <strong>Kategorie:</strong> xxx-yyy<br/>
            <strong>Adresa:</strong> {data.street}, {data.city}, {data.zipCode}
          </div>
          <div className="col-md-6">
            <h1 className="text-center">{data.name}</h1>
          </div>
          <div className="col-md-3">
            <Button className="pull-right">Přihlásit se</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <strong>Přihlášených:</strong> 1 z {data.participantsMax}<br/>
          </div>
          <div className="col-md-6">
            <strong>Cena:</strong> 200 kc
          </div>
          <div className="col-md-3">
          </div>
        </div>
        <div className="row mainInfo">
          <div className="col-md-3">
            <p>
              <strong>Popis</strong><br/>
              {data.description}</p>
          </div>
          <div className="col-md-5">
            <p>
              <strong>Detailní popis</strong><br/>
              {data.detailDescription}
            </p>
          </div>
          <div className="col-md-2">
            <p>
              <strong>Organizátor</strong><br/>

            </p>
          </div>
          <div className="col-md-2">
            <p>
              <strong>Popis lokality</strong><br/>
              sdfsdf
            </p>
          </div>
        </div>
        <div className="row otherInfo">
          <div className="col-md-12">
            <iframe className="map" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyCgB3COu0_8KX6bCwzhHRePKn8rbRdybBI&q='+data.street+','+data.city+','+data.zipCode} />
          </div>
        </div>
      </div>
    );
  }
}
