import React, { Component } from 'react';

export default class MainContent extends Component {
  render() {
    return (
      <div className={this.props.className + ' page-content col-thin-right'}>
        <div className="inner inner-box ads-details-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
