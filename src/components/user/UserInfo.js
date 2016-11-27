import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Image } from 'react-bootstrap';
import userShadow from './../../images/user-shadow.jpg';

class UserInfo extends Component {
  render() {
    let {user, imageUrl} = this.props;
    console.log('user profile props', user);
    // let { email } = this.props.user;
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
                      <ControlLabel>Jméno a příjmení</ControlLabel>
                      <FormControl type="text" value={user.name}/>
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type="text" value={user.email}/>
                    </FormGroup>
                  </form>
                </Col>
                <Col sm={2} className="col-offset-xs-4 pull-right button-wrapper vcenter">
                  <Button classNmae="btn-info">Změnit email</Button>
                  <Button classNmae="btn-info">Změnit heslo</Button>
                  <Button classNmae="btn-primary">Uložit změny</Button>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <form>
                    <FormGroup controlId="formAbout">
                      <ControlLabel>O mě</ControlLabel>
                      <FormControl type="text" value={user.about}/>
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