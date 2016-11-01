import React, {Component} from 'react';
import {Link} from "react-router";

export class SearchItem extends Component {

    render() {
        return (
            <blockquote>
                <div><strong>Name: <Link to={"/events/" + this.props.id}>{this.props.name}</Link></strong></div>
                <div>Description: {this.props.description}</div>
            </blockquote>
        );
    }
}
