import React, { Component } from 'react';
import { Link } from "react-router";
import MenuPane from "./../menu/MenuPane.js";
import { Grid, Row, Col } from 'react-bootstrap';

import logo from '../../images/hobby_hub.jpg';

export default class Header extends Component {
  render() {
    return (


      <div className="App-header">

      <Grid>
<Row className="rowHeader">
<Col sm={6} md={3}><Link className="logo" to="/">


<img src={logo} className="App-logo" alt="logo"/>
</Link>


<br/></Col>

<Col sm={6} md={3}><code>&lt;{'Col Pro searchbox'} /&gt;</code><br/></Col>
<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/></Col>
<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/></Col>
</Row>
</Grid>

<MenuPane openModalFc={this.props.openModalFc}/>

      </div>
    );
  }
};
