import React, { Component } from 'react';

export default class AsideContent extends Component {
  render() {
    return (
      <div className={this.props.className + "  page-sidebar-right"}>
        <aside>
          {this.props.children}
        </aside>
      </div>
    );
  }
}
