import React, {Component} from 'react';
import {Image, Col} from "react-bootstrap";
import grill from "../../images/grill.jpg";

export default class EventsBoxItem extends Component {
    render()
    {
        return (
            <div className="item-list job-item">
              <Col sm={1} xs={2} className="no-padding photobox">
                <div className="add-image">
                  <a href="">
                    <Image className="thumbnail no-margin" alt="POPISEK" src={grill} responsive/>
                  </a>
                </div>
              </Col>
              <Col sm={10} xs={10} className="add-desc-box">
                <div className="add-details jobs-item">
                  <h4 className="job-title">
                    <a href="#">Fotbal pro seniory
                    </a>
                  </h4>
                  <span className="info-row">
                    <span className="item-location">
                      <i className="fa fa-map-marker"></i>
                    Město: Praha, Městská část Praha 7</span>
                  </span>
                  <div className="jobs-desc">
                    Rekreační každotýdenní superliga pro superseniory (od 65 let)
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
                                        Saved Job
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
