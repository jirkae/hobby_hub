import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import '../../scss/app.scss';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  }
}
