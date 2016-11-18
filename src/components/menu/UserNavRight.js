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
    this.props.logoutUser();
    // redirect na homepage
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

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

GuestNavRight = connect(
  mapDispatchToProps
)(GuestNavRight);

export default GuestNavRight;