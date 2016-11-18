import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
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
      <Nav pullRight>
        <NavItem eventKey={1} role="button" onClick={this.handleLoginClick}>Přihlásit se</NavItem>
        <NavItem eventKey={2} role="button" onClick={this.handleRegisterClick}>Registrace</NavItem>
        <li className="postadd"><a className="btn btn-block btn-border btn-post btn-danger" href="#">Feedback</a></li>
      </Nav>
    );
  }
}
