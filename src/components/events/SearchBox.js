import React, { Component } from 'react';
import { FormControl } from "react-bootstrap";
import { SearchResults } from './SearchResults.js';

export class SearchBox extends Component {
  state = {
    url: "http://localhost:3000/api/events"
  };

  render() {
    const {url} = this.state;
    return (
      <div>
        <FormControl type="text" placeholder="Hello!" onChange={(event) => this.setState({
          url: "http://localhost:3000/api/events" + (event.target.value !== '' ? "?filter[where][name]=" + event.target.value : '')
        })}/>
        <SearchResults url={url}/></div>
    );
  }

  componentDidMount() {
  }
}
