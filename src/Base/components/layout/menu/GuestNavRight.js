import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { openModal } from './../../../actions/modalActionCreators';

import LoginRegisterModal from "./../../../../User/components/LoginRegisterModal";

class GuestNavRight extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.dispatch(openModal(() => { return <LoginRegisterModal /> }));
  }

  render() {
    return (
      <Nav pullRight>
        <NavItem role="button" eventKey={5} onClick={this.handleClick}>Přihlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
