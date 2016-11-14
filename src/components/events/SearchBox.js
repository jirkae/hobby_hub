import React, { Component } from 'react';
import { FormControl, Button } from "react-bootstrap";
import { SearchResults } from './SearchResults.js';

export class SearchBox extends Component {
  state = {
    url: "http://localhost:3000/api/events",
    search: ""
  };

  render() {
    const {url} = this.state;
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 eventsFilter">
          <div className="row">
            <div className="col-md-10">
              <FormControl type="text" placeholder="Hledaná akce (např. volejbal)" value={this.state.search} onChange={(event) => this.setState({
                search: event.target.value
              })}/>
            </div>
            <div className="col-md-2">
              <Button onClick={(event) => this.setState({
                url: "http://localhost:3000/api/events" + (this.state.search !== '' ? "?filter[where][name]=" + this.state.search : '')
              })}>Vyhledat</Button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <SearchResults url={url}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
  }
}
