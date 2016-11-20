import React, {Component} from 'react';
import {connect} from 'react-redux';

import { getUserProfileInfo } from './../services/thunkReducer';

class ProfilePage extends Component{
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={this.user ? this.user : "./../images/user-shadow.jpg"} />

        </div>
        Nic tu není :P {this.user}
      </div>
    );
  };

  componentDidMount() {
    const {user} = this.props;
    this.props.dispatch(getUserProfileInfo(user.id));
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