import React, {Component} from "react";
import {Grid, Col, FormControl, Button} from "react-bootstrap";
import EventsBox from "../components/events/EventsBox.js";
import {getEvents} from '../services/restApi';
import SearchBar from "../components/other/SearchBar.js";

export default class EventsListPage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            events: null,
            cities: [],
            tags: []
        };
    }

    componentDidMount()
    {
        var {cities} = this.props.location.query;
        var {tags} = this.props.location.query;
        if (cities === undefined) {
            cities = [];
        }
        if (tags === undefined) {
            tags = [];
        }
        if (cities.constructor !== Array) {
            cities = [cities];
        }
        if (tags.constructor !== Array) {
            tags = [tags];
        }

        this.setState({cities: cities, tags: tags});
        this.fetchEvents(cities, tags);
    }

    handleCitiesChange(cities) {
        this.setState({cities: cities});
    }

    handleTagsChange(tags) {
        this.setState({tags: tags});
    }

    handleUrlChange() {
        this.context.router.push({
            pathname: '/events',
            query: {
                cities: this.state.cities,
                tags: this.state.tags
            }
        });

        this.fetchEvents(this.state.cities, this.state.tags);
    }

    fetchEvents(cities, tags)
    {
        const params = {
            cities: cities,
            tags: tags
        };

        getEvents(params).then((events) => {
            this.setState({events: events});
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
              <div className="search-row-wrapper landingBackgroundEvents">
                <Grid className="text-center">
                  <SearchBar cities={this.state.cities} tags={this.state.tags} onCitiesChange={(cities) => {
                    this.handleCitiesChange(cities)
                  }} onTagsChange={(tags) => {
                    this.handleTagsChange(tags)
                  }} onSearchClick={(params) => {
                    this.handleUrlChange(params)
                  }}/>
                </Grid>
              </div>
              {this.gettingEvents()}
            </div>
        );
    }

}

EventsListPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
