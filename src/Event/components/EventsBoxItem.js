import React, {Component} from 'react';
import {Image, Col} from "react-bootstrap";
import tagIcon from "./../../Base/images/tag-icon.png"
import {Link} from "react-router";
import moment from 'moment';

class EventsBoxItem extends Component {
    render()
    {

      const renderTags = (tags) => {
        if(tags === undefined) { return; }
          const items = tags.map((tag, index) => {
            if(tag.constructor === String)
            {
              return (<span className="react-tagsinput-tag" key={index}>{tag}</span>);
            }
            return [];
          });
          return items;
      };

        return (
            <div className="item-list job-item">
              <div className="flex">
              <Col sm={1} xs={2} className="event-date">
                  <Link to={{
                    pathname: '/events/' + this.props.event.id
                  }}>
                    <span className="date">
                      <span className="day">{moment(this.props.event.startDate).locale('cs').format('D')}.</span>
                      {moment(this.props.event.startDate).locale('cs').format('MMMM')}
                    </span>
                    <Image className="thumbnail no-margin hide" alt="POPISEK" src={tagIcon} responsive/>
                  </Link>
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
            </div>
        );
    }
}

EventsBoxItem.propTypes = {
    event: React.PropTypes.object.isRequired,
};

export default EventsBoxItem;
