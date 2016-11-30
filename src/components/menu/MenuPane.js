import React, { Component } from "react";
import { connect } from "react-redux";

import GuestNavRight from "./../menu/GuestNavRight";
import UserNavRight from "./../menu/UserNavRight";

class MenuPane extends Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        {user.id === undefined ? <GuestNavRight openModalFc={this.props.openModalFc}/> : <UserNavRight openModalFc={this.props.openModalFc} userId={user.id}/>}
      </div>
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
