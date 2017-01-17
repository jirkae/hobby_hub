import React, { Component } from 'react';

class AsideContent extends Component {
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

AsideContent.propTypes = {
    className: React.PropTypes.string,
};

export default AsideContent;
