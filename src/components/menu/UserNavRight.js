import React, {Component} from 'react';

import { Nav, NavItem } from "react-bootstrap";

class GuestNavRight extends Component{
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    console.log('Chtěl se odhlásit, ale to mu neprojde :P')
  }

  render() {
    return(
      <Nav pullRight>
        <NavItem>Profil</NavItem>
        <NavItem onClick={this.handleLogoutClick}>Odhlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight;