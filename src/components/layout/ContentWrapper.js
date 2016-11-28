import React, { Component } from 'react';

export default class ContentWrapper extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}
