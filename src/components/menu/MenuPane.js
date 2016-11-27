import React, { Component } from "react";
import { connect } from "react-redux";

import GuestNavRight from "./../menu/GuestNavRight";
import UserNavRight from "./../menu/UserNavRight";

class MenuPane extends Component {
  render() {
    const {user} = this.props;
    console.log('menuPane user', user);
    return (
      <div>
        {user.id === undefined ? <GuestNavRight openModalFc={this.props.openModalFc}/> : <UserNavRight openModalFc={this.props.openModalFc} userId={user.id}/>}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('menuPane store contents', store);
  return {
    user: store.userReducer.user
  }
};

MenuPane = connect(
  mapStateToProps
)(MenuPane);

export default MenuPane;
