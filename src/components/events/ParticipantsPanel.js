import React, { Component } from 'react';
import Panel from '../layout/Panel.js';

export default class ParticipantPanel extends Component {
  render () {
    return (
      <Panel heading="Přihlášení uživatelé">
        <small>Přihlášeno 1 z 10</small>
      </Panel>
    );
  }
}
