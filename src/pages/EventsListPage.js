import React, { Component } from "react";
import {Grid, Col, FormControl, Button} from "react-bootstrap";
import EventsBox from "../components/events/EventsBox.js";
import { connect } from 'react-redux';
import { getEvents } from './../services/thunkReducer';

class EventsListPage extends Component {
    componentDidMount () {
        this.props.getEvents();
    }

  render() {
    const { query } = this.props.location;
    return (
        <div>
          <div className="search-row-wrapper landingBackgroundEvents">
            <Grid className="text-center">
              <Col sm={3}>
                <FormControl className="keyword" placeholder="sport, koníček, událost" type="text" value={query.a===undefined ? '' : query.a}/>
              </Col>
              <Col sm={3}>
                <FormControl componentClass="select">
                  <option value="select">Všechny kategorie</option>
                  <option value="other">Sporty</option>
                  <option value="other">Dobrodružné</option>
                </FormControl>
              </Col>
              <Col sm={3}>
                <FormControl componentClass="select">
                  <option value="select">Všechny lokality</option>
                  <option value="other">Praha 1</option>
                  <option value="other">Praha 2</option>
                </FormControl>
              </Col>
              <Col sm={3}>
                <Button bsStyle="primary" className="btn-block">
                  Vyhledat akce <i className="fa fa-search"></i>
                </Button>
              </Col>
            </Grid>
          </div>
          <EventsBox events={this.props.events}/>
        </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        user: store.userReducer.user,
        events: store.eventReducer
    }
};

EventsListPage = connect(
    mapStateToProps,
    {
        getEvents, /* funguje stejně jako mapDispatchToProps v případě, že se funkce jmenují stejně */
    }
)(EventsListPage);

export default EventsListPage;