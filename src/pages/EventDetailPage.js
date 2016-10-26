import React, { Component } from 'react';


export class EventDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/events/" + this.props.params.eventId).then(r => r.json()).then(json => {
        this.setState({data: json})
    }).catch(e => console.log("Error"));
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="homepage">
        Event: {this.state.data.name}<br />
        Popis: {this.state.data.detailDescription}
      </div>
    );
  }
}
