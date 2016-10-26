import React, { Component } from 'react';

import logo from '../../images/hobby_hub.jpg';

export class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><a href="/">Homepage</a></li>
              <li><a href="/events">Výpis eventů</a></li>
              <li><a href="/create-event">Přidat event</a></li>
            </ul>
          </nav>
        </div>
    );
  }
}
