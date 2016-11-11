import React, { Component } from 'react';
import { Link } from "react-router";
import { MenuPane } from "./../menu/MenuPane.js";

import logo from '../../images/hobby_hub.jpg';

const Header = () => {
  return (
    <div className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo"/>
      </Link>
      <MenuPane/>
    </div>
  );
};

export default Header;
