import React, { Component } from 'react';


export class EventDetailPage extends Component {
  render() {
    return (
      <div className="homepage">
        EventDetailPage {this.props.params.eventId}
      </div>
    );
  }
}
