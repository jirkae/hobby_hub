import React, {Component} from 'react';
import {Image, Col} from "react-bootstrap";
import grill from "../../images/grill.jpg";
import tagIcon from "../../images/tag-icon.png"
import {Link} from "react-router";
import moment from 'moment';

export default class EventsBoxItem extends Component {
    render()
    {

      const renderTags = (tags) => {
          const items = tags.map((tag) => {
            if(tag.constructor === String)
            {
              return (<span className="react-tagsinput-tag">{tag}</span>);
            }
          });
          return items;
      };

        return (
            <div className="item-list job-item">
              <Col sm={1} xs={2} className="no-padding photobox">
                <div className="add-image">
                  <Link to={{
                    pathname: '/events/' + this.props.event.id
                  }}>
                    <span className="date">
                      <span className="day">{moment(this.props.event.startDate).locale('cs').format('D')}.</span>
                      {moment(this.props.event.startDate).locale('cs').format('MMMM')}
                    </span>
                    <Image className="thumbnail no-margin hide" alt="POPISEK" src={tagIcon} responsive/>
                  </Link>
                </div>
              </Col>
              <Col sm={10} xs={10} className="add-desc-box">
                <div className="add-details jobs-item">
                  <h4 className="job-title">
                    <Link to={{
                      pathname: '/events/' + this.props.event.id
                    }}>
                      {this.props.event.name}
                    </Link>
                  </h4>
                  <span className="info-row">
                    <span className="item-location">
                      <i className="fa fa-map-marker"></i> Město: {this.props.event.city}</span>
                  </span>
                  <div className="jobs-desc">
                    {this.props.event.description}
                  </div>
                  <div className="job-actions">
                    {renderTags(this.props.event.tags)}
                  </div>
                </div>
              </Col>
            </div>
        );
    }
}
