import React, { Component } from 'react';
import { Link } from "react-router";
import MenuPane from "./../menu/MenuPane.js";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";

import logo from '../../images/hobby_hub.jpg';

class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <div></div>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
        <MenuPane openModalFc={this.props.openModalFc}/>
      </div>
    );
  }
}

export default Header;