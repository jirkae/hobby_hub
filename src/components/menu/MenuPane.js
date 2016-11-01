import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class MenuPane extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
          <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
          <LinkContainer to="/users"><NavItem eventKey={3}>Seznam uživatelů</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/login"><NavItem eventKey={5}>Login</NavItem></LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}