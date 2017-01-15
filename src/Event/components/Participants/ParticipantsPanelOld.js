import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from './../../../Base/components/layout/Panel';
import { getParticipants, toggleParticipant, toggleParticipantConfirmation } from './../../actions/eventActionCreators';

class ParticipantPanel extends Component {
  constructor(params) {
    super(params);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }

  componentDidMount() {
    const { getParticipants, event } = this.props;
    getParticipants(event.id);
  }

  

  handleConfirmClick(e, userId) {
    e.preventDefault();
    const { toggleParticipantConfirmation, event, user } = this.props;
    toggleParticipantConfirmation({
      userId: userId,
      eventId: event.id
    }, user.id);
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
