import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from './../../../Base/components/layout/Panel';
import { getParticipants, toggleParticipant, toggleParticipantConfirmation } from './../../actions/eventActionCreators';

class ParticipantPanel extends Component {
  constructor(params) {
    super(params);
    this.handleParticipationClick = this.handleParticipationClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }

  componentDidMount() {
    const { getParticipants, event } = this.props;
    getParticipants(event.id);
  }

  handleParticipationClick(e, id) {
    e.preventDefault();
    const { toggleParticipant, event, user } = this.props;
    toggleParticipant({
      userId: id,
      eventId: event.id
    }, user.id);
  }

  handleConfirmClick(e, userId) {
    e.preventDefault();
    const { toggleParticipantConfirmation, event, user } = this.props;
    toggleParticipantConfirmation({
      userId: userId,
      eventId: event.id
    }, user.id);
  }

  renderActions() {
    const { user, participants } = this.props;
    if (user.id !== undefined) {
      let attempting = false;
      let confirmed = false;
      participants.map(function (item) {
        if (item.participant.id === user.userId) {
          attempting = true;
          if (item.state === "confirmed") {
            confirmed = true;
          }
        }
        return false;
      });
      if (confirmed) {
        return (<span>Pro odhlášení z události prosím kontaktujte správce</span>);
      }
      
      return (
        <div>
          {attempting &&
            <p>Stav: čekání na potvrzení</p>
          }
          <a href="" onClick={(e) => {this.handleParticipationClick(e, this.props.user.userId)}}>{attempting ? 'Odhlásit se' : 'Přihlásit se'}</a>
        </div>
      );
    }
  }

  render() {
    const { participants } = this.props;
    const { user, event } = this.props;

    let owningThisEvent = user.userId !== undefined && user.userId === event.ownerId;

    let confirmedCount = 0;
    let confirmedItems = participants.map((item, index) => {
      if (item.state !== 'pending') {
      confirmedCount++;
      return (<li key={index}>
        <Link to={`/user/${item.participant.id}`} >{item.participant.firstName} {item.participant.lastName}</Link>
        {owningThisEvent &&
          <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.participant.id) } }>Odebrat</a>
        }
      </li>);
      }
      return [];
    });

    let notConfirmedItems = participants.map((item, index) => {
      if (item.state !== 'confirmed') {
      return (<li key={index}>
        <Link to={`/user/${item.participant.id}`} >{item.participant.firstName} {item.participant.lastName}</Link>
        <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.participant.id) } }>Potvrdit</a>
      </li>);
      }
      return [];
    });

    return (
      <div>
        <Panel heading="Přihlášení uživatelé">
          <small>Přihlášeno {confirmedCount} z {event.participantsMax}</small>
          <ul>
            {confirmedItems}
          </ul>
          {this.renderActions()}
        </Panel>
        {owningThisEvent &&
          <Panel heading="Čekající uživatelé">
            <ul>
              {notConfirmedItems}
            </ul>
          </Panel>
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
    participants: store.eventReducer.participants
  }
};

ParticipantPanel = connect(
  mapStateToProps,
  {
    getParticipants,
    toggleParticipant,
    toggleParticipantConfirmation
  }
)(ParticipantPanel);

export default ParticipantPanel;