import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
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
        <li className="postadd"><Link to="/create-event"><a className="btn btn-block   btn-border btn-post btn-danger" href="#">Přidat akci</a></Link></li>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
