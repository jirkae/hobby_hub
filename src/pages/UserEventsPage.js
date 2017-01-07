import React, { Component } from "react";
import EventsBox from "../components/events/EventsBox.js";
import { connect } from 'react-redux';
import { getUserEvents } from './../services/thunkReducer';

class UserEventsPage extends Component {
  componentDidMount () {
    let userId = this.props.user.userId;
    this.props.getUserEvents(userId);
  }

  render() {
    return (
        <div>
          <div className="search-row-wrapper landingBackgroundEvents">
          </div>
          <EventsBox title="Moje akce" events={this.props.events}/>
        </div>
    );
  }
}
// react dimensions

const mapStateToProps = (store) => {
  return {
      user: store.userReducer.user,
      events: store.eventReducer
  }
};

UserEventsPage = connect(
    mapStateToProps,
    {
        getUserEvents, /* funguje stejně jako mapDispatchToProps v případě, že se funkce jmenují stejně */
    }
)(UserEventsPage);

export default UserEventsPage;
