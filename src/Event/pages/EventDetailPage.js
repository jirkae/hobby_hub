import React, { Component } from 'react';
import ContentWrapper from '../../Base/components/layout/ContentWrapper.js';
import MainContent from '../../Base/components/layout/MainContent.js';
import AsideContent from '../../Base/components/layout/AsideContent.js';
import ParticipantPanel from '../components/Participants/ParticipantsPanel.js';
import { connect } from "react-redux";
import EventDetailInfo from './../components/EventDetailInfo';
import { getEventData } from './../actions/eventActionCreators';

class EventDetailPage extends Component {

  componentDidMount() {
    const {eventId} = this.props.params;
    const {getEventData} = this.props;
    getEventData(eventId);
  }

  generateAsideContent() {
    const { data } = this.props;

    if (data === null) {
      return (
        <p>Načítám data...</p>
      );
    } else {
      return (
        <ParticipantPanel event={data} />
      );
    }
  }

  render() {
    const {data} = this.props;

    return (
      <ContentWrapper>
        <MainContent className="col-sm-9">
          {data !== null  ?
            <EventDetailInfo data={data} />
            : null
          }
        </MainContent>
        <AsideContent className="col-sm-3">
          {data !== null  ?
            <ParticipantPanel />
            : null
          }
        </AsideContent>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
    data: store.eventReducer.data
  }
};

EventDetailPage = connect(
  mapStateToProps,
  {
    getEventData
  }
)(EventDetailPage);

export default EventDetailPage;
