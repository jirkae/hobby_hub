import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from '../layout/Panel.js';
import { getParticipants, postToggleParticipation, getOwnedEvents } from '../../services/restApi.js';

class ParticipantPanel extends Component {
  constructor(params) {
    super(params);
    this.state = {
      participants: [],
      ewnedEvents: []
    };
    this.handleParticipationClick = this.handleParticipationClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  componentDidMount() {
    this.updateParticipantsList();
    if (this.props.user.id !== undefined) {
      getOwnedEvents(this.props.user).then(response => {
        this.setState({
          ownedEvents: response.data
        });
      });
    }
  }

  updateParticipantsList() {
    getParticipants(this.props.event.id).then(response => {
      this.setState({
        participants: response.data
      });
    })
  }

  handleParticipationClick(e) {
    e.preventDefault();
    console.log({
      userId: this.props.user.id,
      eventId: this.props.event.id
    });
    postToggleParticipation({
      userId: this.props.user.userId,
      eventId: this.props.event.id
    }, this.props.user.id).then(this.updateParticipantsList.bind(this));
  }

  handleRemoveClick(e) {
    e.preventDefault();
    console.log(e.target);
  }

  renderActions() {
    const { user } = this.props;

    if (user.id !== undefined) {
      let attempting = false;
      this.state.participants.map(function(item) {
        if (item.id === user.userId) {
          attempting = true;
        }
      });
      return (<a href="" onClick={this.handleParticipationClick}>{attempting ? 'Odhlásit se' : 'Přihlásit se'}</a>);
    }
  }

  render () {
    const { participants, ownedEvents } = this.state;

    let owningThisEvent = false;

    if (ownedEvents !== undefined && ownedEvents.length > 0) {
      ownedEvents.map(item => {
        if (item.ownerId === this.props.user.userId) {
          owningThisEvent = true;
        }
      });
    }

    let items = participants.map(item => {
        return <li><Link to={`/user/${item.userId}`} >{item.firstName} {item.lastName}</Link></li>
    });

    return (
      <Panel heading="Přihlášení uživatelé">
        <small>Přihlášeno {participants.length} z 10</small>
        <ul>
          {items}
        </ul>
        {this.renderActions()}
      </Panel>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

ParticipantPanel = connect(
  mapStateToProps
)(ParticipantPanel);

export default ParticipantPanel;
