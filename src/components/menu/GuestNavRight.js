import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeModalVisibility } from './../../actions/index';

import Tabs from "./../layout/Tabs";
import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";

class GuestNavRight extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
this.props.dispatch(changeModalVisibility(true));
  }



  render() {
    return(
      <Nav pullRight>
        <NavItem role="button" eventKey={5} onClick={event => this.handleClick(event, 0)}>Přihlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
