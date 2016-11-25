import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class UserInfo extends Component {
  render() {
    let { user, imageUrl } = this.props;
    console.log('user', user);
    // let { email } = this.props.user;
    return (
      <Grid className="container-top-margin">
        <Row>
        <Col sm={12} className="page-content col-thin-right">
          <Col lg={12} className="content-box">
            <Row>
              <Col sm={3} className="no-padding photobox">
                <img src="./../../images/user-shadow.jpg"/>
              </Col>
              <Col sm={3}>
                <form>
                  <FormGroup controlId="formName">
                    <ControlLabel>Jméno a příjmení</ControlLabel>
                    <FormControl type="text" value={user}/>
                  </FormGroup>
                  <FormGroup controlId="formEmail">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="text" value={user}/>
                  </FormGroup>
                </form>
              </Col>
              <Col sm={3} className="col-offset-xs-3 pull-right">
                <Button>Změnit email</Button>
                <Button>Změnit heslo</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <form>
                  <FormGroup controlId="formName">
                    <ControlLabel>O mě</ControlLabel>
                    <FormControl type="text" value={user}/>
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