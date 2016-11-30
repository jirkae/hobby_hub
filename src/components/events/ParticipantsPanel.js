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

  componentDidMout() {
    this.setState({
      participants: getParticipants(this.props.params.event.id)
    });
  }

  handleParticipationClick(e) {
    e.preventDefault();
    postToggleParticipation({
      userId: this.props.user.id,
      eventId: this.props.params.event.id
    });
  }

  renderActions() {
    const { user } = this.props;
    if (user.id !== undefined) {
      return (<a href="" onClick={this.handleParticipationClick}>Přihlásit se</a>);
    }
  }

  render () {
    const { participants } = this.state;

    let items = participants.map(function(item){
      return <li>{item.firstName} {item.lastName}</li>
    });

    return (
      <Panel heading="Přihlášení uživatelé">
        <small>Přihlášeno 1 z 10</small>
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
