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
      <Nav pullRight>
        <NavItem eventKey={1} role="button" onClick={this.handleLoginClick}>Přihlásit se</NavItem>
        <NavItem eventKey={2} role="button" onClick={this.handleRegisterClick}>Registrace</NavItem>
        <li className="postadd"><a className="btn btn-block btn-border btn-post btn-danger" href="#">Feedback</a></li>
        {user === undefined ? <GuestNavRight openModalFc={this.props.openModalFc}/> : <UserNavRight openModalFc={this.props.openModalFc} userId={user.id}/>}
      </Nav>
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
