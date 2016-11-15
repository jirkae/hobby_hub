import React, {Component} from 'react';
import { SearchItem } from './SearchItem.js';

export class SearchResults extends Component {
    state = {
        data: [],
        url: ''
    };

    render() {
      console.log(this.state.data);
        var items = this.state.data.map((data) => {
            return <SearchItem name={data.name} description={data.description} id={data.id} key={data.id}/>
        })
        return (
            <div className="searchResults">{items}</div>
        );
    }

    componentDidMount()
    {
        const {url} = this.props;
        fetch(url).then(r => r.json()).then(json => {
            this.setState({data: json})
        }).catch(e => console.log("Error"));
    }

    componentDidUpdate()
    {
        const {url} = this.props;
        if (url !== this.state.url) {
          fetch(url).then(r => r.json()).then(json => {
            if (typeof json.events !== 'undefined') {
              json = json.events;
            }
              this.setState({
                data: json,
                url: url
              })
          }).catch(e => console.log("Error"));
        }
    }
}
