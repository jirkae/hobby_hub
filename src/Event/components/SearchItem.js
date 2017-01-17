import React, {Component} from 'react';
import {Link} from "react-router";

class SearchItem extends Component {

    render() {
        return (
            <div className="eventItem">
                <strong><Link to={"/events/" + this.props.id}>{this.props.name}</Link></strong>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

SearchItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
};

export default SearchItem;