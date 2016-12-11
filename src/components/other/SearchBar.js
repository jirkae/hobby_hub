import React, {Component} from "react";
import {Button, Col} from "react-bootstrap";
import TagsSuggestInput from "./TagsSuggestInput.js";
import {fetchCities, fetchTags} from '../../services/restApi';

export default class SearchBar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cities: [],
            tags: []
        };
    }

    componentWillReceiveProps(nextProps)
    {
        var {params} = nextProps;
        if (params === undefined) {
            params = {
                cities: [],
                tags: []
            };
        }
        this.setState({cities: params.cities, tags: params.tags});
    }

    handleCitiesChange(cities) {
        this.setState({cities: cities});
    }

    handleTagsChange(tags) {
        this.setState({tags: tags});
    }

    render()
    {
        return (
            <div className="row search-row animated fadeInUp">
              <Col lg={4} sm={4} className="search-col relative locationicon">
                <i className="icon-location-2 icon-append"></i>

                <TagsSuggestInput tags={this.state.cities} onTagsChange={(cities) => {
                  this.handleCitiesChange(cities)
                }} placeholder="město, městská část" onFetchSuggestionsRequest={fetchCities}/>

              </Col>
              <Col lg={4} sm={4} className="search-col relative">
                <i className="icon-docs icon-append"></i>

                <TagsSuggestInput tags={this.state.tags} onTagsChange={(tags) => {
                  this.handleTagsChange(tags)
                }} placeholder="sport, událost" onFetchSuggestionsRequest={fetchTags}/>

              </Col>
              <Col lg={4} sm={4} className="search-col">
                <Button bsStyle="primary" className="btn-search btn-block" role="button" onClick={() => {
                  this.props.onSearchClick({cities: this.state.cities, tags: this.state.tags})
                }}>
                  <i className="icon-search"></i>
                  <strong>Najít událost</strong>
                </Button>
              </Col>
            </div>
        );
    }
}
