import React, { Component } from "react";
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { postLogin } from './../../services/restApi';

// import NotificationSystem from "react-notification-system";

// const toastr = require('@hps/react-toaster');
const NotificationSystem = require('react-notification-system');

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    NotificationSystem.addNotification({
      message: 'Notification message',
      level: 'success',
      position: 'br',
    });

    const formData = new FormData(event.target);

    postLogin(formData)
      .then(({data}) => {
        // zavřít modální okno a zobrazit zelenou hlášku
        })
      .catch(() => {
        console.log("Chyba!!!");
      }); // nechat modální okno otevřené a zobrazit červenou hlášku
  }

  render() {
    return (
      <div className="col-xs-offset-1 col-xs-9">
        <NotificationSystem ref="notificationSystem" />
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Email
            </Col>
            <Col sm={9}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Heslo
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Heslo" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={9}>
              <Button type="submit">
                Přihlásit se
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default LoginForm;
