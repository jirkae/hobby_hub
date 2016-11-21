import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeModalVisibility } from './../../actions/index';

import LoginForm from "./../login/LoginForm";
import RegisterForm from "./../login/RegisterForm";
import ForgotPassForm from "./../login/ForgotPassForm";

class GuestNavRight extends Component{
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleForgotPassClick = this.handleForgotPassClick.bind(this);
  }

  handleLoginClick(e) {
    this.changeModalProp(e, <LoginForm />);
  }

  handleRegisterClick(e) {
    this.changeModalProp(e, <RegisterForm />);
  }

  handleForgotPassClick(e) {
    this.changeModalProp(e, <ForgotPassForm />);
  }

  changeModalProp(event, newProp) {
    event.preventDefault();
    this.props.openModalFc(() => {
      return (
        newProp
      );
    });
    this.props.dispatch(changeModalVisibility(true));
  }

  render() {
    return(
      <Nav pullRight>
        <NavItem role="button" eventKey={5} onClick={this.handleLoginClick}>Přihlásit se</NavItem>
        <NavItem role="button" eventKey={6} onClick={this.handleRegisterClick}>Registrovat</NavItem>
        <NavItem role="button" eventKey={7} onClick={this.handleForgotPassClick}>Zapomenuté heslo</NavItem>
        {/*<li className="postadd"><a className="btn btn-block btn-border btn-post btn-danger" href="#">Feedback</a></li>*/}
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);
