import React, { Component } from 'react';
import { connect } from "react-redux";

import Panel from '../layout/Panel.js';
import { getParticipants, postToggleParticipation } from '../../services/restApi.js';

class ParticipantPanel extends Component {
  constructor(params) {
    super(params);
    this.state = {
      participants: []
    };
    this.handleParticipationClick = this.handleParticipationClick.bind(this);
  }

  componentDidMount() {
    this.updateParticipantsList();
  }

  updateParticipantsList() {
    getParticipants(this.props.event.id).then(response => {
      console.log(response);
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
    let test = postToggleParticipation({
      userId: this.props.user.userId,
      eventId: this.props.event.id
    }, this.props.user.id).then(this.updateParticipantsList.bind(this));
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
    const { participants } = this.state;

    let items = participants.map(function(item){
      return <li>{item.firstName} {item.lastName}</li>
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
