import React, { Component } from 'react';
import { NavItem, Nav, } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logoutUser } from './../../../../User/actions/userActionCreators';
import { getLatestEvents } from './../../../../Event/actions/eventActionCreators';
import {LinkContainer} from "react-router-bootstrap";

class GuestNavRight extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    this.props.dispatch(logoutUser(this.props.userId));
    this.props.dispatch(getLatestEvents());
    this.context.router.push('/');
  }

  render() {
    return (
      <Nav pullRight>
          <LinkContainer active={false} to={{
            pathname: '/myActions'
          }}>
            <NavItem eventKey={1} role="button">Moje akce</NavItem>
          </LinkContainer>
          <LinkContainer active={false} to={{
            pathname: '/profile'
          }}>
            <NavItem eventKey={2} role="button">Profil</NavItem>
          </LinkContainer>
          <NavItem eventKey={3} role="button" onClick={this.handleLogoutClick}>Odhlásit se</NavItem>
          <LinkContainer active={false} to={{
            pathname: '/create-event'
          }}>
            <NavItem eventKey={2} className="postadd"><div className="btn btn-block btn-border btn-post btn-danger">Přidat akci</div></NavItem>
          </LinkContainer>
      </Nav>
    )
  }
}

GuestNavRight.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default GuestNavRight = connect()(GuestNavRight);
