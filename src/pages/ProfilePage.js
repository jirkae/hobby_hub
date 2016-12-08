import React, {Component} from 'react';
import {connect} from 'react-redux';

import { getUserProfileInfo, putUserProfileInfo } from './../services/thunkReducer';
import UserInfo from './../components/user/UserInfo';
import EventsBox from './../components/events/EventsBox';

class ProfilePage extends Component{
  componentDidMount() {
    // this.props.params.userId // TODO dodělat podmínku jestli je v URL nějaké id, pokud ano, načíst daného uživatele a nastavit profil jako neaktualizovatelný
    this.props.getUserInfo(this.props.user.id);
  }

  render() {
    const { user, params } = this.props;

    return (
      <div className="container">
        <UserInfo user={user} saveUserInfo={this.props.saveUserInfo}/>
        <EventsBox actionsType="Moje" forUserWithId={user.id} getEvents={this.props.getUserInfo}/>
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
    getUserInfo: (id) => {
      dispatch(getUserProfileInfo(id));
    },

      saveUserInfo: (user) => {
          dispatch(putUserProfileInfo(user));
      }
  };
};

ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePage;