import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";
import ForgotPassForm from "./../login/ForgotPassForm";

import { changeModalVisibility } from "./../../actions"

class MenuPane extends Component {
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
    this.props.dispatch(changeModalVisibility); // nezachytí ji reducer
    this.props.openModalFc(() => {
      return (
        newProp
      );
    });
  }

  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
          <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeModalVisibility: () => {
//       dispatch(changeModalVisibility());
//     }
//   }
// };
//
// MenuPane = connect(
//   mapDispatchToProps
// )(MenuPane);

export default MenuPane = connect()(MenuPane);
