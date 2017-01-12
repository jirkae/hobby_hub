import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logoutUser } from './../../../../User/actions/userActionCreators';

class GuestNavRight extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    this.props.dispatch(logoutUser(this.props.userId));
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to={{pathname: "/myActions"}}>Moje akce</Link></li>
        <li><Link to={{pathname: "/profile"}}>Profil</Link></li>
        <NavItem onClick={this.handleLogoutClick}>Odhlásit se</NavItem>
        <li className="postadd"><Link className="btn btn-block btn-border btn-post btn-danger" to="/create-event">Přidat akci</Link></li>
      </ul>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
