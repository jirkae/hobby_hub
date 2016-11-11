import React, { Component } from "react";
import { Navbar, Nav, NavItem, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";
import ForgotPassForm from "./../login/ForgotPassForm";

const LOGIN_CODE = "login";
const REGISTER_CODE = "register";
const FORGOT_PASS_CODE = "forgotPass";

class MenuPane extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitData();

    this.close = this.close.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.openForgotPass = this.openForgotPass.bind(this);
  }

  getInitData() {
    return {
      showModal: false,
      formToShow: "",
      modaltitle: "",
    };
  }

  close() {
    this.setState({showModal: false,});
  }

  openLogin() {
    this.setState({
      formToShow: LOGIN_CODE,
      modaltitle: "Přihlášení",
      showModal: true,
    });
  }

  openRegister() {
    this.setState({
      formToShow: REGISTER_CODE,
      modaltitle: "Registrace",
      showModal: true,
    });
  }

  openForgotPass() {
    this.setState({
      formToShow: FORGOT_PASS_CODE,
      modaltitle: "Zapomenuté heslo",
      showModal: true,
    });
  }

  getModalBody () {
    switch (this.state.formToShow) {
      case LOGIN_CODE:
        return <LoginForm/>;
      case REGISTER_CODE:
        return <RegisterForm/>;
      case FORGOT_PASS_CODE:
        return <ForgotPassForm/>;
      default:
        return <div></div>;
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Nav pullLeft>
            <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
            <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
            <LinkContainer to="/users"><NavItem eventKey={3}>Seznam uživatelů</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={5} onClick={this.openLogin}>Přihlásit se</NavItem>
            <NavItem eventKey={6} onClick={this.openRegister}>Registrovat</NavItem>
            <NavItem eventKey={7} onClick={this.openForgotPass}>Zapomenuté heslo</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{ this.state.modaltitle }</Modal.Title>
            { this.getModalBody() }
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default MenuPane;
