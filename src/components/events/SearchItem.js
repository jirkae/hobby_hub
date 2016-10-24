import React, {Component} from 'react';

export class SearchItem extends Component {

    render() {
        return (
            <blockquote>
                <div><strong>Name: {this.props.name}</strong></div>
                <div>Description: {this.props.description}</div>
            </blockquote>
        );
    }
}
