import React, {Component} from "react";
import { Grid } from "react-bootstrap";
import EventsBox from "./../components/EventsBox.js";
import { getEvents } from './../../Base/services/restApi';
import SearchBar from "./../components/SearchBar.js";

export default class EventsListPage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            events: null,
            params: {
                cities: [],
                tags: []
            }
        };
    }

    componentDidMount()
    {
      const params = this.getParams(this.props.location.query);
      this.setState({params: params});
      this.fetchEvents(params);
    }

    componentWillReceiveProps(nextProps)
    {
        const params = this.getParams(nextProps.location.query);
        this.setState({params: params});
        this.fetchEvents(params);
    }

    getParams(inputParams)
    {
      let {cities, tags} = inputParams;
      if(cities === undefined)
      {
        cities = [];
      }
      if(tags === undefined)
      {
        tags = [];
      }
      if(cities.constructor !== Array)
      {
        cities = [cities];
      }
      if(tags.constructor !== Array)
      {
        tags = [tags];
      }
      return  {cities: cities, tags: tags};
    }

    handleSearch(params) {
        this.context.router.push({
            pathname: '/events',
            query: params
        });
    }

    fetchEvents(params)
    {
        getEvents(params).then((events) => {
            this.setState({events: events});
        });
    }

    gettingEvents(params)
    {
        const {events} = this.state;
        if (events === null) {
            return "Načítám akce...";
        } else {
            return <EventsBox events={events} params={params} showMap={true}/>
        }
    }

    render()
    {
        const {params} = this.state;
          return (
            <div>
              <div className="search-row-wrapper landingBackgroundEvents">
                <Grid className="text-center">
                  <SearchBar
                    params={params}
                    onSearchClick={(params) => {
                      this.handleSearch(params)
                    }}/>
                </Grid>
              </div>
              {this.gettingEvents(params)}
            </div>
        );
    }

}

EventsListPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
