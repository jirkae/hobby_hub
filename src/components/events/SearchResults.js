import React, {Component} from 'react';
import { SearchItem } from './SearchItem.js';

export class SearchResults extends Component {
    state = {
        data: [],
    };

    render() {
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
        fetch(url).then(r => r.json()).then(json => {
            this.setState({data: json})
        }).catch(e => console.log("Error"));
    }
}
