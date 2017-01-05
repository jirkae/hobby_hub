import React, {Component} from "react";
import EventsBox from "../components/events/EventsBox.js";
import SearchBar from "../components/other/SearchBar.js";
import {getLatestEvents} from '../services/restApi';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class LandingPage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            events: null
        };
    }

    componentDidMount()
    {
        // TODO Ideálně smazat tuhle prasárnu a volat pouze
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
        const { interests } = this.props;

        const title = (interests === undefined || interests.length === 0) ? undefined : 'Mohlo by se vám líbit';

        if (events === null) {
            return "Načítám akce...";
        } else {
            return <EventsBox title={title} events={events}/>
        }
    }
    render()
    {
        const { interests } = this.props;
        const userInterests = interests === undefined ? [] : interests;

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

                      <SearchBar params={{tags: userInterests, cities: []}} onSearchClick={(params) => {this.handleSearch(params)}}/> {/*params={{params: {tags: this.props.interests}}}*/}
                        <div className="resume-up">
                        <a>
                          <i className="icon-doc-4"></i>
                        </a>
                        <Link to="/create-event"><b>Založte vlastní akci! </b></Link>Vytvořte si profil a sežeňte společnost na vámi zvolenou akci.
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

const mapStateToProps = (store) => {
    return {
        interests: store.userReducer.user.interests
    }
};

LandingPage = connect(
    mapStateToProps
)(LandingPage);

export default LandingPage
