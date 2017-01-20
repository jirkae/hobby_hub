import React, { Component } from 'react';
import AddEvent from "./../components/AddEvent.js";
import ContentWrapper from './../../Base/components/layout/ContentWrapper.js';
import MainContent from './../../Base/components/layout/MainContent.js';
import Panel from './../../Base/components/layout/Panel.js';
import AsideContent from './../../Base/components/layout/AsideContent.js';
import { getEventData } from './../actions/eventActionCreators';
import { connect } from "react-redux";

class EventsCreatePage extends Component {

  componentDidMount() {
    const { eventId } = this.props.params;
    const {getEventData} = this.props;
    if (eventId) {
      getEventData(eventId);
    }
  }

  render() {
    let { event } = this.props;
    if (this.props.params.eventId === undefined) {
      event = null;
    } 
    if (this.props.params.eventId !== undefined && event === null) {
      return (
        <div>Načítám data</div>
      );
    }

    return (
      <ContentWrapper>
        <MainContent className="col-sm-9">
          <div className="createEvent">
            <h2 className="title-2 uppercase"><strong> <i className="icon-briefcase"></i> Přidat akci </strong></h2>
            <AddEvent event={event} />
          </div>
        </MainContent>
        <AsideContent className="col-sm-3">
          <div className="text-center">
            <div className="promo-text-box"><i className=" icon-lamp fa fa-4x icon-color-1"></i>
              <h3><strong>Jak správně vytvořit akci? </strong></h3>
              <p> Měli byste především myslet na to, že čím lepší informace předáte
              případnému zájemci, tím spíše nenastane žádný problém v průběhu akce. </p>
            </div>
            <Panel heading="Tipy">
              <ul className="list-check">
                <li> Pojmenujte správně akci</li>
                <li> Používejte výstižné štítky</li>
                <li> Nebojte se být detailní</li>
                <li> Zadejte údaje o lokalitě</li>
              </ul>
            </Panel>
          </div>
        </AsideContent>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
    event: store.eventReducer.data
  }
};

EventsCreatePage = connect(
  mapStateToProps,
  {
    getEventData
  }
)(EventsCreatePage);

export default EventsCreatePage;
