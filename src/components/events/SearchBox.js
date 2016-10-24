import React, {Component} from 'react';
import {SearchResults} from './SearchResults.js';

export class SearchBox extends Component {
    state = {
        url: "http://localhost:3000/api/events"
    };

    render() {
        const {url} = this.state;
        return (
            <div>
                <input type="text" placeholder="Hello!" onChange={(event) => this.setState({
                    url: "http://localhost:3000/api/events?filter[where][name]=" + event.target.value
                })}/>
                <SearchResults url={url}/></div>
        );
    }

    componentDidMount()
    {}
}
