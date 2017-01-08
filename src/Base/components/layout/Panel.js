import React, { Component } from 'react';

export default class Panel extends Component {
  render() {
    return (
      <div className="panel sidebar-panel panel-contact-seller">
        <div className="panel-heading">{this.props.heading}</div>
        <div className="panel-content user-info">
          <div className="panel-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
