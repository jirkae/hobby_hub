import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Image } from 'react-bootstrap';
import userShadow from './../../images/user-shadow.jpg';

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        firstName: '',
        lastName:'',
        info:''
    };

      this.onClick = this.onClick.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleAboutChange = this.handleAboutChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

    componentWillReceiveProps(newProps) {
      const { props } = this;

        if(newProps !== props) {
            this.setState({ ...newProps.user });
        }
    }

  onClick(event) {
    event.preventDefault();

      const formData = this.state;

      if(formData.email){
          this.props.saveUserInfo(formData);
      }
  }

  handleFirstNameChange(event) {
      this.setState({firstName: event.target.value});
  }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleAboutChange(event) {
        this.setState({info: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

  render() {
    let { firstName, lastName, email, info } = this.state;

    return (
      <Grid className="container-top-margin">
        <Row>
          <Col sm={12} className="page-content col-thin-right">
            <Col lg={12} className="content-box">
              <Row>
                <Col sm={3} className="no-padding photobox">
                  <Image className="thumbnail no-margin" alt="Profilová fotka" src={userShadow} responsive/>
                </Col>
                <Col sm={3}>
                  <form>
                    <FormGroup controlId="formName">
                      <ControlLabel>Jméno</ControlLabel>
                      <FormControl type="text" value={firstName} onChange={this.handleFirstNameChange}/>
                    </FormGroup>
                    <FormGroup controlId="formSurname">
                      <ControlLabel>Příjmení</ControlLabel>
                      <FormControl type="text" value={lastName} onChange={this.handleLastNameChange}/>
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type="email" value={email} onChange={this.handleEmailChange}/>
                    </FormGroup>
                  </form>
                </Col>
                <Col sm={2} className="col-offset-xs-4 pull-right button-wrapper vcenter">
                  <Button>Změnit heslo</Button>
                  <Button bsStyle="primary" onClick={this.onClick}>Uložit změny</Button>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <form>
                    <FormGroup controlId="formAbout">
                      <ControlLabel>O mě</ControlLabel>
                      <FormControl type="text" value={info} onChange={this.handleAboutChange}/>
                    </FormGroup>
                  </form>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserInfo;