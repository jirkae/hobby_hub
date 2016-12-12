import React, { Component } from 'react';
import AddEvent from "../components/events/AddEvent.js";
import { getEventById } from '../services/restApi.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import MainContent from '../components/layout/MainContent.js';
import Panel from '../components/layout/Panel.js';
import AsideContent from '../components/layout/AsideContent.js';

export default class EventsCreatePage extends Component {

  constructor(props) {
    super(props);
    this.state = {event: null};
  }

  componentDidMount() {
    if (this.props.params.eventId) {
      getEventById(this.props.params.eventId)
        .then(json => {
          this.setState({event: json.data})
      }).catch(e => console.log(e));
    }
  }

  render() {
    const { event } = this.state;

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
              případnému zájemci, tím spíše nenastane žádný problém v průběhu akce. Zvažte následující: </p>
            </div>
            <Panel heading="Tipy">
              <ul className="list-check">
                <li> Pojmenujte správně akci</li>
                <li> Používejte výstižné štítky</li>
                <li> Nebojte se být detailní</li>
                <li> Zadejte údaje o lokalitě</li>
                <li> Buďte přesní!</li>
              </ul>
            </Panel>
          </div>
        </AsideContent>
      </ContentWrapper>
    );
  }
}
