import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="row">
        <img src={imageUrl ? imageUrl : "./../images/user-shadow.jpg"}/>

      </div>
    );
  }
}

export default UserInfo;