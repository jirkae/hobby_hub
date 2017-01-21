import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

import { addComment } from './../actions/eventActionCreators';

class EventComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ''
        };

        this.handleAddComment = this.handleAddComment.bind(this);
    }

    handleAddComment() {
        const { addComment, event } = this.props;

        if (this.state.newComment !== '') {
            addComment(event.id, this.state.newComment);
            this.setState({ newComment: '' });
        }
    }

    render() {
        const {comments} = this.props;

        return (
            <Row>
                <Col xs="12">
                    <h4 className="text-uppercase">Komentáře</h4>
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.newComment} onChange={(e) => { this.setState({ newComment: e.target.value }); } }></textarea>
                        <button className="btn btn-xs btn-success" onClick={this.handleAddComment}>Přidat komentář</button>
                    </div>
                    {comments.map((item) => (
                        <div key={item.id} className="media">
                            <div className="media-body">
                                <div>
                                    <strong>{item.user.firstName} {item.user.lastName}</strong>
                                    {moment(item.dateCreated).fromNow()}
                                </div>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userReducer.user
    }
};

EventComments = connect(
    mapStateToProps,
    {
        addComment
    }
)(EventComments);

export default EventComments;