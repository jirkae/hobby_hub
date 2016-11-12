import React, { Component } from "react";
import { Navbar, Nav, NavItem, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";
import ForgotPassForm from "./../login/ForgotPassForm";

export default class MenuPane extends Component {
  constructor(params) {
    super(params);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleForgotPassClick = this.handleForgotPassClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.openModalFc(() => {
      return (
        <LoginForm />
      );
    });
  }

  handleRegisterClick(e) {
    e.preventDefault();
    this.props.openModalFc(() => {
      return (
        <RegisterForm />
      );
    });
  }

  handleForgotPassClick(e) {
    e.preventDefault();
    this.props.openModalFc(() => {
      return (
        <ForgotPassForm />
      );
    });
  }

  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
          <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
          <LinkContainer to="/users"><NavItem eventKey={3}>Seznam uživatelů</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={5} onClick={this.handleLoginClick}>Přihlásit se</NavItem>
          <NavItem eventKey={6} onClick={this.handleRegisterClick}>Registrovat</NavItem>
          <NavItem eventKey={7} onClick={this.handleForgotPassClick}>Zapomenuté heslo</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
