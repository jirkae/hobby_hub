import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { openModal } from './../../../actions/modalActionCreators';

import Tabs from "./../Tabs";
import LoginForm from "./../../../../User/components/LoginForm";
import RegisterForm from "./../../../../User/components/RegisterForm";

class GuestNavRight extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const tabs = [
      { label: 'Přihlášení', render: () => <LoginForm /> },
      { label: 'Registrace', render: () => <RegisterForm /> }
    ];

    this.props.dispatch(openModal(() => { return <Tabs tabs={tabs} /> }));
  }

  render() {
    return (
      <Nav pullRight>
        <NavItem role="button" eventKey={5} onClick={event => this.handleClick(event, 0)}>Přihlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
