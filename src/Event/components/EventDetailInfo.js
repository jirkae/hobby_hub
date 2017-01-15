import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import moment from 'moment';
import { connect } from "react-redux";
import { Link } from 'react-router';
import EventComments from './EventComments';



class EventDetailInfo extends Component {
    render() {
        const {data, user} = this.props;
        const renderTags = (tags) => {
            if (tags === undefined) { return; }
            const items = tags.map((tag, index) => {
                if (tag.constructor === String) {
                    return (<span className="react-tagsinput-tag" key={index}>{tag}</span>);
                }
                return undefined;
            });
            return items;
        };

        return (
            <div id="eventDetail">
                <Row>
                    <Col md={9}>
                        <h2>{data.name}</h2>
                    </Col>
                    <Col md={3}>
                        {user.id !== undefined && data.ownerId === user.userId &&
                            <Link className="btn btn-block btn-info" to={"/create-event/" + data.id}>Upravit akci</Link>
                        }
                    </Col>
                </Row>
                <span className="info-row">
                    <span className="date"><i className=" icon-clock"> </i> Datum a čas: {moment(data.startDate).format('DD. MM. YYYY h:mm')}- {moment(data.endDate).format('DD. MM. YYYY h:mm')} </span> <br />
                    <span className="item-location"><i className="fa fa-map-marker"></i> {data.street}, {data.city}, {data.zipCode} </span> </span>
                <div className="Ads-Details ">
                    <div className="row">
                        <div className="ads-details-info jobs-details-info col-md-8">
                            <p>{data.description}</p>
                            <h4 className="text-uppercase ">Detailní popis:</h4>
                            <p>{data.detailedDescription}</p>
                            <h4 className="text-uppercase ">Štítky:</h4>
                            <p>{renderTags(data.tags)}</p>
                            <h4 className="text-uppercase ">Mapa konání:</h4>
                            <iframe className="map" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyCgB3COu0_8KX6bCwzhHRePKn8rbRdybBI&q=' + data.street + ',' + data.city + ',' + data.zipCode} />
                            <EventComments />
                        </div>
                        <div className="col-md-4">
                            <aside className="panel panel-body panel-details job-summery">
                                <ul>
                                    <li><p className=" no-margin "><strong>Cena:</strong> {data.price} Kč </p></li>
                                </ul>
                            </aside>
                            <div className="ads-action hide">
                                <ul className="list-border">
                                    <li><a href="#" data-toggle="modal"> <i className="fa icon-print"></i> Print job</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userReducer.user
    }
};

EventDetailInfo = connect(
    mapStateToProps
)(EventDetailInfo);

export default EventDetailInfo;