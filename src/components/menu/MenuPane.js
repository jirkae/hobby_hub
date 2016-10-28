import React, { Component } from "react";
import { Link } from "react-router";

export class MenuPane extends Component {
  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/" className="menuItem" activeClassName="active">Homepage</Link></li>
          {/* root adresa "/" je aktivní pořád, proto svítí*/}
          <li><Link to="events" className="menuItem" activeClassName="active">Výpis eventů</Link></li>
          <li><Link to="create-event" className="menuItem" activeClassName="active">Přidat event</Link></li>
          <li><Link to="users" className="menuItem" activeClassName="active">Seznam uživatelů</Link></li>
          <li><Link to="login" className="menuItem" activeClassName="active">login</Link></li>
        </ul>
      </div>
    );
  }
}