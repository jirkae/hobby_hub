import React, {Component} from 'react';
import {Image, Col} from "react-bootstrap";
import grill from "../../images/grill.jpg";
import {LinkContainer} from "react-router-bootstrap";

export default class EventsBoxItem extends Component {
    render()
    {
        return (
            <div className="item-list job-item">
              <Col sm={1} xs={2} className="no-padding photobox">
                <div className="add-image">
                  <LinkContainer to={{
                    pathname: '/events/' + this.props.event.id
                  }}>
                    <a>
                      <Image className="thumbnail no-margin" alt="POPISEK" src={grill} responsive/>
                    </a>
                  </LinkContainer>
                </div>
              </Col>
              <Col sm={10} xs={10} className="add-desc-box">
                <div className="add-details jobs-item">
                  <h4 className="job-title">
                    <LinkContainer to={{
                      pathname: '/events/' + this.props.event.id
                    }}>
                      <a href="#">{this.props.event.name}
                      </a>
                    </LinkContainer>
                  </h4>
                  <span className="info-row">
                    <span className="item-location">
                      <i className="fa fa-map-marker"></i>
                      Město: {this.props.event.city}</span>
                  </span>
                  <div className="jobs-desc">
                    {this.props.event.description}
                  </div>
                  <div className="job-actions">
                    <ul className="list-unstyled list-inline">
                      <li>
                        <a className="save-job" href="#">
                          <span className="fa fa-star-o"></span>
                          Připojit se
                        </a>
                      </li>
                      <li className="saved-job hide">
                        <a href="#" className="saved-job">
                          <span className="fa fa-star"></span>
                          Odpojit se
                        </a>
                      </li>
                      <li>
                        <a href="#" className="email-job">
                          <i className="fa fa-envelope"></i>
                          Napsat vlastníkovi akce
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </div>
        );
    }
}
