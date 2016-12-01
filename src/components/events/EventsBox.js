import React, {Component} from 'react';
import {Grid, Row, Col, Glyphicon} from "react-bootstrap";
import EventsBoxItem from "./EventsBoxItem.js";
import {baseUrl} from '../../services/restApi.js';
import { getEvents } from '../../services/restApi';

export default class EventsBox extends Component {

  state = {
      city: this.props.city,
      tags: this.props.tags,
      events: []
  };

  componentDidMount()
  {
    var params = {city: this.state.city, tags: this.state.tags};
    var events = getEvents(params).then(response => {
      this.setState({events: response.data.events});
    });
  }

  getEventsBoxItems()
  {
      var items = this.state.events.map((data) => {
          return (<EventsBoxItem event={data} key={data.id}/>);
      })
      return items;
  }

    render()
    {
        return (
            <Grid className="container-top-margin">
              <Row>
                <Col sm={12} className="page-content col-thin-right">
                  <Col lg={12} className="content-box">
                    <Row className="row-featured row-featured-category">
                      <Col lg={12} className="box-title no-border">
                        <div className="inner">
                          <h2>
                            <span>Akce</span>
                            <a href="#" className="sell-your-item">
                              Zobrazit více akcí
                              <Glyphicon glyph="th-list"></Glyphicon>
                            </a>
                          </h2>
                        </div>
                      </Col>
                      <div className="adds-wrapper">

                        {this.getEventsBoxItems()}

                      </div>
                      <div className="tab-box save-search-bar text-center">
                        <a className="text-uppercase" href="#">
                                        <i className="icon-briefcase"></i>
                                        Zobrazit všechny akce
                                    </a>
                                </div>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        );

    }
}
