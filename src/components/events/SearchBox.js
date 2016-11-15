import React, { Component } from 'react';
import { FormControl, Button } from "react-bootstrap";
import { SearchResults } from './SearchResults.js';
import { baseUrl } from '../../services/restApi.js';

export class SearchBox extends Component {
  state = {
    url: baseUrl() + 'events',
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
                url: baseUrl() + "events" + (this.state.search !== '' ? "/findFulltext?query=" + this.state.search : '')
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
