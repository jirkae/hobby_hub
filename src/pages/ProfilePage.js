import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfilePage extends Component{
  render() {
    return (
      <div>Nic tu není :P {this.props.user}</div>
    );
  };
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

ProfilePage = connect(
  mapStateToProps
)(ProfilePage);

export default ProfilePage;