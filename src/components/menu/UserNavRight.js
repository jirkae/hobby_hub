import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logoutUser } from './../../services/thunkReducer';

class GuestNavRight extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    console.log('pokus o logout');
    this.props.dispatch(logoutUser(this.props.userId));
  }

  render() {
    return (
      <Nav pullRight>
        <LinkContainer to="/profile"><NavItem>Profil</NavItem></LinkContainer>
        <NavItem onClick={this.handleLogoutClick}>Odhlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);