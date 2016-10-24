import React, { Component } from 'react';
import { SearchBox } from '../components/events/SearchBox.js';

export class EventsPage extends Component {
  render() {
    return (
      <div className="homepage">
        <SearchBox />
      </div>
    );
  }
}
