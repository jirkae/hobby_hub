import React, { Component } from 'react';
import { Link } from "react-router";
import MenuPane from "./../menu/MenuPane.js";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";

import logo from '../../images/hobby_hub.jpg';

class Header extends Component {
  render() {
    const user = this.props;

    return (
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
        <div className="pull-right">
          <Link to="/profile">
            <Button disabled={!user} >Profil</Button>
          </Link>
        </div>
        <MenuPane openModalFc={this.props.openModalFc}/>
      </div>
    );
  }
};

export default Header;