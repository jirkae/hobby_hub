import React, {Component} from "react";
import EventsBox from "../../Event/components/EventsBox.js";
import SearchBar from "../../Event/components/SearchBar.js";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getLatestEvents, getFilteredEvents} from './../../Event/actions/eventActionCreators';
import { getUserProfileInfo } from './../../User/actions/userActionCreators';

class LandingPage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            events: null
        };
    }

    componentWillReceiveProps(newProp) {
        if (newProp.userId !== undefined && this.props.userId === undefined) {
            this.props.getUserProfileInfo(newProp.userId);
        } if (newProp.interests !== undefined && this.props.interests === undefined) {
            this.props.getFilteredEvents({ tags: newProp.interests });
        }
    }

    componentDidMount()
    {
        const { userId, interests, getFilteredEvents, getLatestEvents } = this.props;
        if (userId) { // Lze ternárním výrazem, ale ESlint potom hází warning
            getFilteredEvents({tags: interests});
        } else {
            getLatestEvents();
        }
    }

    handleSearch(params) {
        this.context.router.push({
            pathname: '/events',
            query: params
        });
    }

    gettingEvents()
    {
        const { events } = this.props;
        const { interests } = this.props;

        const title = (!interests || interests.length === 0) ? undefined : 'Mohlo by se vám líbit';

        if (events === null) {
            return "Načítám akce...";
        } else {
            return <EventsBox title={title} events={events}/>
        }
    }
    render()
    {
        const { interests } = this.props;
        const userInterests = (interests === undefined || interests === null) ? [] : interests;

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
                        <Link to="/create-event"><b> Založte vlastní akci! </b></Link>Vytvořte si profil a sežeňte společnost na vámi zvolenou akci.
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
        interests: store.userReducer.user.interests ? store.userReducer.user.interests : [],
        userId: store.userReducer.user.userId,
        events: store.eventsListReducer.items
    }
};

LandingPage = connect(
    mapStateToProps,
    { /* funguje stejně jako mapDispatchToProps v případě, že se funkce jmenují stejně */
        getLatestEvents,
        getFilteredEvents,
        getUserProfileInfo
    }
)(LandingPage);

export default LandingPage
