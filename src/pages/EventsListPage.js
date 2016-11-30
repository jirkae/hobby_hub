import React, { Component } from "react";
import {Grid, Col, FormControl, Button} from "react-bootstrap";
import EventsBox from "../components/events/EventsBox.js";

export default class EventsListPage extends Component {
componentDidMount () {
  console.log(this.props.location.query);
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
          <EventsBox/>
        </div>
    );
  }
}
