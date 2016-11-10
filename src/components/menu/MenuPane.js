import React, { Component } from "react";
import { Navbar, Nav, NavItem, Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { LoginForm } from "./../login/LoginForm";
import { RegisterForm } from "./../login/RegisterForm";

export class MenuPane extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitData();

    this.close = this.close.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
  }

  getInitData() {
    return {
      showModal: false,
      formToShow: '',
      modaltitle: '',
    };
  }

  close() {
    this.getInitData();
  }

  openLogin() {
    this.setState({
      formToShow: "login",
      modaltitle: 'Přihlášení',
      showModal: true,
    });
  }

  openRegister() {
    this.setState({
      formToShow: "register",
      modaltitle: 'Registrace',
      showModal: true,
    });
  }


  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
            <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
            <LinkContainer to="/users"><NavItem eventKey={3}>Seznam uživatelů</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={5} onClick={this.openLogin}>Login</NavItem>
            <NavItem eventKey={6} onClick={this.openRegister}>Register</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{ this.state.modaltitle }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.state.formToShow === "login" ? <LoginForm/> : <RegisterForm/>}
            <div className="clearFix"></div>
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}
