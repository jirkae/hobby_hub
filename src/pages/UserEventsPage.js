import React, { Component } from "react";
import {Grid, Col, FormControl, Button} from "react-bootstrap";
import EventsBox from "../components/events/EventsBox.js";
import { connect } from 'react-redux';
import { getUserEvents } from './../services/thunkReducer';

class UserEventsPage extends Component {
  componentDidMount () {
    let userId = this.props.user.userId;
    this.props.getUserEvents(userId);
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
          <EventsBox title="Moje akce" events={this.props.events}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
      getUserEvents: (id) => {
          dispatch(getUserEvents(id));
      },
  }
};

UserEventsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserEventsPage);

export default UserEventsPage;