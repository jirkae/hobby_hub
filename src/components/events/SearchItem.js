import React, {Component} from 'react';
import {Link} from "react-router";

export class SearchItem extends Component {

    render() {
        return (
            <div className="eventItem">
                <strong><Link to={"/events/" + this.props.id}>{this.props.name}</Link></strong>
                <div>{this.props.description}</div>
            </div>
        );
    }
}
