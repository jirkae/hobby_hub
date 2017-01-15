import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeModalVisibility } from './../../../actions/modalActionCreators';

import Tabs from "./../Tabs";
import LoginForm from "./../../../../User/components/LoginForm";
import RegisterForm from "./../../../../User/components/RegisterForm";

class GuestNavRight extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      const tabs = [
          { label: 'Přihlášení', render: () => <LoginForm /> },
          { label: 'Registrace', render: () => <RegisterForm /> }
      ];

    this.changeModalProp(e, <Tabs tabs={tabs}/>);
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
        <NavItem role="button" eventKey={5} onClick={event => this.handleClick(event, 0)}>Přihlásit se</NavItem>
      </Nav>
    )
  }
}

export default GuestNavRight = connect()(GuestNavRight);