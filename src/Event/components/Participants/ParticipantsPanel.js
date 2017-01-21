import React, { Component } from 'react';
import { connect } from "react-redux";

import { getParticipants } from './../../actions/eventActionCreators';
import ParticipantsList from './ParticipantsList';
import ParticipantsRequestedList from './ParticipantsRequestedList';

class ParticipantPanel extends Component {

    componentDidMount() {
        const { getParticipants, event } = this.props;
        getParticipants(event.id);
    }

    componentDidUpdate() {
        const { getParticipants, event } = this.props;
        getParticipants(event.id);
    }

    render() {
        const { participantsConfirmed, participantsRequested, event, user} = this.props;
        const owningThisEvent = user.id !== undefined && event.ownerId === user.userId;

        let amIConfirmed = false;
        participantsConfirmed.forEach((item) => {
            if (user.id !== undefined && user.userId === item.id) {
                amIConfirmed = true;
            }
        });

        let amIRequested = false;
        participantsRequested.forEach((item) => {
            if (user.id !== undefined && user.userId === item.id) {
                amIRequested = true;
            }
        });

        return (
            <div>
                < ParticipantsList participants={participantsConfirmed} amIRequested={amIRequested} amIConfirmed={amIConfirmed} />
                {owningThisEvent
                    ? < ParticipantsRequestedList participants={participantsRequested} />
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userReducer.user,
        participantsConfirmed: store.eventReducer.participantsConfirmed,
        participantsRequested: store.eventReducer.participantsRequested,
    }
};

ParticipantPanel = connect(
    mapStateToProps,
    {
        getParticipants,
    }
)(ParticipantPanel);

export default ParticipantPanel;
