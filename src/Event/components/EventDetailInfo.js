import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import moment from 'moment';
import { connect } from "react-redux";
import { Link } from 'react-router';

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
                    <span className="date"><i className="icon-clock"> </i> Začátek akce: {moment(data.startDate).format('DD. MM. YYYY h:mm')}</span><br />
                    <span className="date"><i className="icon-clock-2"> </i> Konec akce: {moment(data.endDate).format('DD. MM. YYYY h:mm')}</span><br />
                    <span className="item-location"><i className="icon-globe"> </i> Adresa: {data.street}, {data.city}, {data.zipCode} </span><br />
                    <span className="item-location"><i className="icon-money"> </i> Cena: {data.price},- </span>
                </span>
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
                        </div>
                        <div className="col-md-4">
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

EventDetailInfo.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default EventDetailInfo;