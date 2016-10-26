import React, {Component} from 'react';

export class SearchItem extends Component {

    render() {
        return (
            <blockquote>
                <div><strong>Name: <a href={"/events/" + this.props.id}>{this.props.name}</a></strong></div>
                <div>Description: {this.props.description}</div>
            </blockquote>
        );
    }
}
