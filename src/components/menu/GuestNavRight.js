import React, {Component} from 'react';

import { Nav, NavItem } from "react-bootstrap";

import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";
import ForgotPassForm from "./../login/ForgotPassForm";

class GuestNavRight extends Component{
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleForgotPassClick = this.handleForgotPassClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.changeModalProp(<LoginForm />);
  }

  handleRegisterClick(e) {
    e.preventDefault();
    this.changeModalProp(<RegisterForm />);
  }

  handleForgotPassClick(e) {
    e.preventDefault();
    this.changeModalProp(<ForgotPassForm />);
  }

  changeModalProp(newProp) {
    this.props.openModalFc(() => {
      return (
        newProp
      );
    });
  }

  render() {
    return(
      <Nav pullRight>
        <NavItem eventKey={5} onClick={this.handleLoginClick}>Přihlásit se</NavItem>
        <NavItem eventKey={6} onClick={this.handleRegisterClick}>Registrovat</NavItem>
        <NavItem eventKey={7} onClick={this.handleForgotPassClick}>Zapomenuté heslo</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight;