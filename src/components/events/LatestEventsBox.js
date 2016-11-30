import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, Glyphicon} from "react-bootstrap";
import EventsBoxItem from "./EventsBoxItem.js";
import {getLatestEvents} from '../../services/restApi.js';

export default class LatestEventsBox extends Component {

    state = {
        events: []
    };

    componentDidMount()
    {
      getLatestEvents().then(response => {
        this.setState({events: response.data});
      });
    }

    getEventsBoxItems(events)
    {
        var items = this.state.events.map((data) => {
            return (<EventsBoxItem event={data} key={data.id}/>);
        })
        return items;
    }

    render()
    {
        const {events} = this.state;

        return (
            <Grid className="container-top-margin">
                <Row>
                    <Col sm={12} className="page-content col-thin-right">
                        <Col lg={12} className="content-box">
                            <Row className="row-featured row-featured-category">
                                <Col lg={12} className="box-title no-border">
                                    <div className="inner">
                                        <h2>
                                            <span>Poslední</span> akce
                                              <Link to="/events" className="sell-your-item">
                                                Zobrazit více akcí <Glyphicon glyph="th-list"></Glyphicon>
                                              </Link>
                                        </h2>
                                    </div>
                                </Col>
                                <div className="adds-wrapper">

                                    {this.getEventsBoxItems(events)}

                                </div>
                                <div className="tab-box save-search-bar text-center">
                                  <Link to="/events" className="sell-your-item">
                                    <i className="icon-briefcase"></i> Zobrazit všechny akce
                                  </Link>
                                </div>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        );

    }
}
