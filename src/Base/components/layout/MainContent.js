import React, { Component } from 'react';

class MainContent extends Component {
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

MainContent = {
    className: React.PropTypes.string,
};

export default MainContent;