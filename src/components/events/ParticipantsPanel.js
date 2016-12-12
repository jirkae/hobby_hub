import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from '../layout/Panel.js';
import { getParticipants, postToggleParticipation, getOwnedEvents, postToggleConfirmation } from '../../services/restApi.js';

class ParticipantPanel extends Component {
  constructor(params) {
    super(params);
    this.state = {
      participants: [],
    };
    this.handleParticipationClick = this.handleParticipationClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }

  componentDidMount() {
    this.updateParticipantsList();
  }

  updateParticipantsList() {
    getParticipants(this.props.event.id).then(response => {
      this.setState({
        participants: response.data
      });
    })
  }

  handleParticipationClick(e, id) {
    e.preventDefault();
    postToggleParticipation({
      userId: id,
      eventId: this.props.event.id
    }, this.props.user.id).then(this.updateParticipantsList.bind(this));
  }

  handleConfirmClick(e, userId) {
    e.preventDefault();
    postToggleConfirmation({
      userId: userId,
      eventId: this.props.event.id
    }, this.props.user.id).then(this.updateParticipantsList.bind(this));
  }

  renderActions() {
    const { user } = this.props;
    if (user.id !== undefined) {
      let attempting = false;
      let confirmed = false;
      this.state.participants.map(function (item) {
        if (item.participant.id === user.userId) {
          attempting = true;
          if (item.state === "confirmed") {
            confirmed = true;
          }
        }
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
    const { participants, ownedEvents } = this.state;

    let owningThisEvent = this.props.user.userId !== undefined && this.props.user.userId === this.props.event.ownerId;

    var confirmedCount = 0;
    let confirmedItems = participants.map((item, index) => {
      if (item.state === 'pending') {
        return;
      }
      confirmedCount++;
      return (<li key={index}>
        <Link to={`/user/${item.participant.id}`} >{item.participant.firstName} {item.participant.lastName}</Link>
        {owningThisEvent &&
          <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.participant.id) } }>Odebrat</a>
        }
      </li>);
    });

    let notConfirmedItems = participants.map((item, index) => {
      if (item.state === 'confirmed') {
        return;
      }
      return (<li key={index}>
        <Link to={`/user/${item.participant.id}`} >{item.participant.firstName} {item.participant.lastName}</Link>
        <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.participant.id) } }>Potvrdit</a>
      </li>);
    });

    return (
      <div>
        <Panel heading="Přihlášení uživatelé">
          <small>Přihlášeno {confirmedCount} z {this.props.event.participantsMax}</small>
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
    user: store.userReducer.user
  }
};

ParticipantPanel = connect(
  mapStateToProps
)(ParticipantPanel);

export default ParticipantPanel;
