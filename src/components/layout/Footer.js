import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>© Company {new Date().getFullYear()}</p>
      </div>
    );
  }
}
