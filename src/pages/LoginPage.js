import React, { Component } from 'react';

export class LoginPage extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div><label htmlFor="username">User name</label></div>
            <input type="text" name="firstName" id="username"/>
          </div>
          <div>
            <div><label htmlFor="passwd">Password</label></div>
            <input type="text" name="lastName" id="passwd"/>
          </div>
          <div>
            <button type="submit">Submit Order</button>
          </div>
        </form>
      </div>
    )
  }
}