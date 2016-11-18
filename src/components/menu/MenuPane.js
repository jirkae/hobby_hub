import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

import GuestNavRight from "./../menu/GuestNavRight";
import UserNavRight from "./../menu/UserNavRight";

class MenuPane extends Component {
  render() {
    const {user} = this.props;
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/events"><NavItem eventKey={1}>Výpis eventů</NavItem></LinkContainer>
          <LinkContainer to="/create-event"><NavItem eventKey={2}>Přidat event</NavItem></LinkContainer>
        </Nav>
        {user === undefined ? <GuestNavRight openModalFc={this.props.openModalFc}/> : <UserNavRight openModalFc={this.props.openModalFc} />}
      </Navbar>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

MenuPane = connect(
  mapStateToProps
)(MenuPane);

export default MenuPane;
