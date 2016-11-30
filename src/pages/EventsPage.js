import React, { Component } from 'react';
import { SearchBox } from '../components/events/SearchBox.js';

export default class EventsPage extends Component {
  componentDidMount() {
    console.log(this.props.location.query);
  }

  render() {
    return (
      <div>
        <SearchBox />
      </div>
    );
  }
};
