import React, {Component} from "react";
import EventsBox from "../components/events/EventsBox.js";
import SearchBar from "../components/other/SearchBar.js";
import {getLatestEvents} from '../services/restApi';

export default class LandingPage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            events: null
        };
    }

    componentDidMount()
    {
        getLatestEvents().then((results) => {
            this.setState({events: results});
        });
    }

    handleSearch(params) {
        this.context.router.push({
            pathname: '/events',
            query: params
        });
    }

    gettingEvents()
    {
        const {events} = this.state;
        if (events === null) {
            return "Načítám akce...";
        } else {
            return <EventsBox events={events}/>
        }
    }
    render()
    {
        return (
            <div>
              <div className="intro jobs-intro hasOverly landingBackground">
                <div className="dtable hw100">
                  <div className="dtable-cell hw100">
                    <div className="container text-center">
                      <h1 className="intro-title animated fadeInDown">
                        Nenuďte se a najděte si akci!
                      </h1>
                      <p className="sub animated fadeIn">
                        Najděte nejaktuálnější akce ve vašem okolí.
                      </p>

                      <SearchBar onSearchClick={(params) => {this.handleSearch(params)}}/>
                      <div className="resume-up">
                        <a>
                          <i className="icon-doc-4"></i>
                        </a>
                        <a>
                          <b>Založte vlastní akci!</b>
                        </a>
                        Vytvořte si profil a sežeňte společnost na vámi zvolenou akci.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.gettingEvents()}
            </div>
        );
    }
}

LandingPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
