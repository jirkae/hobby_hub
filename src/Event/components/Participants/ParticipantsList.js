import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import Panel from './../../../Base/components/layout/Panel';
import { toggleParticipant, toggleParticipantConfirmation } from './../../actions/eventActionCreators';
import { openModal } from './../../../Base/actions/modalActionCreators';
import LoginRegisterModal from './../../../User/components/LoginRegisterModal';

class ParticipantsList extends Component {
    constructor(props) {
        super(props);
        this.handleParticipationClick = this.handleParticipationClick.bind(this);
        this.toggleParticipant = this.toggleParticipant.bind(this);
    }

    handleParticipationClick(e) {
        e.preventDefault();
        const { user, openModal } = this.props;
        if (user.id !== undefined) {
            this.toggleParticipant(user);
        } else {
            openModal(() => { return <LoginRegisterModal onSuccessLogin={this.toggleParticipant}/> });
        }
    }

    toggleParticipant(user) {
        const { event, toggleParticipant } = this.props;

        toggleParticipant({
            userId: user.userId,
            eventId: event.id
        }, user.id);
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
        const { participants, user, event, amIRequested, amIConfirmed } = this.props;
        const owningThisEvent = user.id !== undefined && event.ownerId === user.userId;

        const items = participants.map((item, index) => {
            return (<li key={index}>
                <Link to={`/user/${item.id}`} >{item.firstName} {item.lastName}</Link>
                {owningThisEvent &&
                    <a className="pull-right" href="#" onClick={(e) => { this.handleConfirmClick(e, item.id) } }>Odebrat</a>
                }
            </li>);
        });

        const renderActions = () => {
            if (amIConfirmed) {
                return (<span>Pro odhlášení z události prosím kontaktujte správce</span>);
            }

            return (
                <div>
                    {amIRequested &&
                        <p>Stav: čekání na potvrzení</p>
                    }
                    <a href="" onClick={this.handleParticipationClick}>{amIRequested ? 'Odhlásit se' : 'Přihlásit se'}</a>
                </div>
            );
        };


        return (
            <Panel heading="Přihlášení uživatelé">
                <small>Přihlášeno {participants.length} z {event.participantsMax}</small>
                <ul>
                    {items}
                </ul>
                {renderActions()}
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

ParticipantsList = connect(
    mapStateToProps,
    {
        toggleParticipant,
        toggleParticipantConfirmation,
        openModal
    }
)(ParticipantsList);

export default ParticipantsList;