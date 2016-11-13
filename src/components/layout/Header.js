import React, { Component } from 'react';
import { Link } from "react-router";
import MenuPane from "./../menu/MenuPane.js";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";

import logo from '../../images/hobby_hub.jpg';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Header extends Component {
  render() {
    const user = this.props;

    return (
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
        <div style={}>
          <Button disabled={!user} >Profil</Button>
        </div>
        <MenuPane openModalFc={this.props.openModalFc}/>
      </div>
    );
  }
};
