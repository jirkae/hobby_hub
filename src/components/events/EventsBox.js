import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import EventsBoxItem from "./EventsBoxItem.js";

let events = <div className="adds-wrapper">
  <EventsBoxItem/>
  <EventsBoxItem/>
  <EventsBoxItem/>
  <EventsBoxItem/>
</div>;


export default class EventsBox extends Component {



  componentWillMount() {
    const { forUserWithId, getEvents } = this.props;
    if (forUserWithId) {
      getEvents(forUserWithId);
    }
  }

  render() {
    const { actionsType } = this.props;
    let headerFirstWord = actionsType || 'Poslední';

    return (
      <Grid className="container-top-margin">
        <Row>
          <Col sm={12} className="page-content col-thin-right">
            <Col lg={12} className="content-box">
              <Row className="row-featured row-featured-category">
                <Col lg={12} className="box-title no-border">
                  <div className="inner">
                    <h2>
                      <span>{headerFirstWord}</span> akce
                      <a href="#" className="sell-your-item">
                        Zobrazit více akcí
                        <Glyphicon className="icon-th-list"></Glyphicon>
                      </a>
                    </h2>
                  </div>
                </Col>
                {events}
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
