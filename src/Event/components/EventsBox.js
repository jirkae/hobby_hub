import React from 'react';
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import EventsBoxItem from "./EventsBoxItem.js";
import { Link } from 'react-router';

import EventsMap from './EventsMap';

const EventsBox = (props) => {

  const renderItems = (events) => {
    const items = events.map((event) => {
      return (<EventsBoxItem event={event} key={event.id} />)
    });
    if (items.length !== 0) {
      return items;
    }
    return <div className="alert alert-warning no-results-alert">
      <h3><Glyphicon glyph="search" /> Žádné výsledky.</h3>
      Zkus změnit nastavení svého vyhledávání.
        </div>;
  };

  return (
    <Grid className="container-top-margin">
      { typeof props.showMap !== 'undefined' && props.showMap &&
        <EventsMap events={props.events} params={props.params} />
      }
      <Row>
        <Col sm={12} className="page-content col-thin-right">
          <Col lg={12} className="content-box">
            <Row className="row-featured row-featured-category">
              <Col lg={12} className="box-title no-border">
                <div className="inner">
                  <h2>
                    <span>{props.title || "Poslední akce"}</span>
                    <Link to="/events" className="sell-your-item">
                      Zobrazit více akcí{" "}
                      <Glyphicon glyph="th-list"></Glyphicon>
                    </Link>
                  </h2>
                </div>
              </Col>
              <div className="adds-wrapper">
                {renderItems(props.events)}
              </div>
              <div className="tab-box save-search-bar text-center">
                <Link to="/events" className="text-uppercase">
                  <i className="icon-briefcase"></i>
                  Zobrazit všechny akce
                    </Link>
              </div>
            </Row>
          </Col>
        </Col>
      </Row>
    </Grid>
  );
};

export default EventsBox;
