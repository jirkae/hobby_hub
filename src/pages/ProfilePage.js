import React, {Component} from 'react';
import {connect} from 'react-redux';

import { getUserProfileInfo } from './../services/thunkReducer';
import UserInfo from './../components/user/UserInfo';
import EventsBox from './../components/events/EventsBox';

class ProfilePage extends Component{
  render() {
    const { user } = this.props;
    return (
      <div className="container">
        <UserInfo user={user}/>
        <EventsBox actionsType="Moje" forUserWithId={user.id} getEvents={this.props.getUserEvents}/>
      </div>
    );
  };
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserEvents: (id) => {
      dispatch(getUserProfileInfo(id));
    }
  };
};

ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps()
)(ProfilePage);

export default ProfilePage;