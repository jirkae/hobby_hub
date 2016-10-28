import React, { Component } from 'react';
import { MenuPane } from "./../menu/MenuPane.js";

import logo from '../../images/hobby_hub.jpg';

export class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <MenuPane/>
      </div>
    );
  }
}
