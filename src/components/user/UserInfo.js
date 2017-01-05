import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Image } from 'react-bootstrap';
import userShadow from './../../images/user-shadow.jpg';
import TagsSuggestInput from './../../components/other/TagsSuggestInput';
import { fetchTags } from '../../services/restApi'; // TODO smazat tuhle prasárnu

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        firstName: '',
        lastName: '',
        info: '',
        interests: []
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

      if(formData.email) {
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

    handleInterestsChange(interests) {
        this.setState({interests: interests});
    }

  render() {
    let { firstName, lastName, email, info, interests } = this.state;

    let mutateStateButtons = this.props.updateable ?
          <Col sm={2} className="col-offset-xs-1 pull-right button-wrapper vcenter">
              <Button bsStyle="primary" onClick={this.onClick}>Uložit změny</Button>
          </Col> : '';

    return (
      <Grid className="container-top-margin">
        <Row>
          <Col sm={12} className="page-content col-thin-right">
            <Col lg={12} className="content-box">
              <Row>
                <Col sm={3} className="no-padding photobox">
                  <Image className="thumbnail no-margin" alt="Profilová fotka" src={userShadow} responsive/>
                </Col>
                <form>
                  <Col sm={3}>
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
                      <FormControl type="email" value={email} />
                    </FormGroup>
                </Col>
                  <Col sm={3}>
                    <FormGroup controlId="formAbout" rows="3">
                      <ControlLabel>O mě</ControlLabel>
                      <textarea className='form-control cell not-resizeable'
                                rows='11'
                                type="text"
                                value={info}
                                onChange={this.handleAboutChange} />
                    </FormGroup>
                  </Col>
                </form>
                  { mutateStateButtons }
              </Row>
              <Row>
                <Col sm={6}>
                  <form>
                    <FormGroup controlId="formInterests">
                      <ControlLabel>Záliby</ControlLabel>
                        <TagsSuggestInput tags={interests}
                                          onTagsChange={(tags) => {this.handleInterestsChange(tags)}}
                                          placeholder="Oblíbené aktivity"
                                          onFetchSuggestionsRequest={fetchTags}/>
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
