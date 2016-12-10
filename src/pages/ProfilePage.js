import React, {Component} from 'react';
import {connect} from 'react-redux';

import { getUserProfileInfo, putUserProfileInfo, getUserEvents } from './../services/thunkReducer';
import UserInfo from './../components/user/UserInfo';
import EventsBox from './../components/events/EventsBox';

class ProfilePage extends Component{
  componentDidMount() {
      this.conditionalDataLoad(this.props);
  }

  componentWillReceiveProps(newProps) {
      if(newProps.params !== this.props.params) {
          this.conditionalDataLoad(newProps);
      }
  }

  conditionalDataLoad(props) {
      let id = props.params.id === undefined ? props.user.userId : props.params.id;

      this.props.getUserInfo(id);
      this.props.getUserEvents(id);
  }

  render() {
    const { user, params } = this.props;
    let title = params.id === undefined ? "Moje akce" : `Akce uživatele ${user.firstName} ${user.lastName}`;

    return (
      <div className="container">
        <UserInfo user={user} saveUserInfo={this.props.saveUserInfo} updateable={params.id === undefined}/>
        <EventsBox title={title} events={this.props.events}/>
      </div>
    );
  };
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
    events: store.eventReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => {
      dispatch(getUserProfileInfo(id));
    },

      saveUserInfo: (user) => {
          dispatch(putUserProfileInfo(user));
      },

      getUserEvents: (id) => {
          dispatch(getUserEvents(id));
      },

  };
};

ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePage;