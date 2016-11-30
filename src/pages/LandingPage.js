import React, { Component } from "react";
import {FormControl, Button, Col} from "react-bootstrap";
import EventsBox from "../components/events/EventsBox.js";

export default class LandingPage extends Component {
  constructor(params) {
    super(params);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    //this.props.router.push({pathname:'/events',query: {a:'c'}});
    this.context.router.push({pathname:'/events',query: {a:'c'}});
  }

  render() {
    return (
        <div>
          <div className="intro jobs-intro hasOverly landingBackground">
            <div className="dtable hw100">
              <div className="dtable-cell hw100">
                <div className="container text-center">
                  <h1 className="intro-title animated fadeInDown">
                    Nenuďte se a najděte si akci!
                  </h1>
                  <p className="sub animated fadeIn">
                    Najděte nejaktuálnější akce ve vašem okolí.
                  </p>
                  <div className="row search-row animated fadeInUp">
                    <Col lg={4} sm={4} className="search-col relative locationicon">
                      <i className="icon-location-2 icon-append"></i>
                      <FormControl name="country" id="autoComplete-ajax" className="locinput input-rel searchtag-input has-icon" placeholder="obec, městská část, psč" value="" autoComplete="off" type="text"/>
                    </Col>
                    <Col lg={4} sm={4} className="search-col relative">
                      <i className="icon-docs icon-append"></i>
                      <FormControl name="ads" className="has-icon" placeholder="sport, koníček, událost" value="" type="text"/>
                    </Col>
                    <Col lg={4} sm={4} className="search-col">
                      <Button bsStyle="primary" className="btn-search btn-block" role="button" onClick={this.handleButtonClick}>
                        <i className="icon-search"></i>
                        <strong>Najít událost</strong>
                      </Button>
                    </Col>
                  </div>
                  <div className="resume-up">
                    <a>
                      <i className="icon-doc-4"></i>
                    </a>
                    <a>
                      <b>Založte vlastní akci!</b>
                    </a>
                    Vytvořte si profil a sežeňte společnost na vámi zvolenou akci.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EventsBox/>
        </div>
    );
  }
}

LandingPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
