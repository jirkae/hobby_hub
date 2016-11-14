import React, { Component } from 'react';
import { Link } from "react-router";
import MenuPane from "./../menu/MenuPane.js";

import logo from '../../images/hobby_hub.jpg';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
        <MenuPane openModalFc={this.props.openModalFc}/>
      </div>
    );
  }
};
