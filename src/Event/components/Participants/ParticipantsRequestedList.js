import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from './../../../Base/components/layout/Panel';
import { toggleParticipantConfirmation } from './../../actions/eventActionCreators';

class ParticipantsRequestedList extends Component {
    constructor(props) {
        super(props);
        this.handleConfirmClick = this.handleConfirmClick.bind(this);
    }

    handleConfirmClick(e, userId) {
        e.preventDefault();
        const { toggleParticipantConfirmation, event, user } = this.props;
        toggleParticipantConfirmation({
            userId: userId,
            eventId: event.id
        }, user.id);
    }


    render() {
        const { participants } = this.props;

        const items = participants.map((item, index) => {
            return (<li key={index}>
                <Link to={`/user/${item.id}`} >{item.firstName} {item.lastName}</Link>
                <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.id) } }>Potvrdit</a>
            </li>);
        });

        return (
            <Panel heading="živatelé na schválení">
                <ul>
                    {items}
                </ul>
            </Panel>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userReducer.user,
        event: store.eventReducer.data,
    }
};

ParticipantsRequestedList = connect(
    mapStateToProps,
    {
        toggleParticipantConfirmation,
    }
)(ParticipantsRequestedList);

export default ParticipantsRequestedList;