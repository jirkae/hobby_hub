import React, { Component } from "react";
import { connect } from "react-redux";

import GuestNavRight from "./../menu/GuestNavRight";
import UserNavRight from "./../menu/UserNavRight";

class MenuPane extends Component {
  render() {
    const {user} = this.props;
    return showMenuByUserType(user);
  }
}

function showMenuByUserType(user)
{
  return user.id ? <UserNavRight userId={user.id} /> : <GuestNavRight />;
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
