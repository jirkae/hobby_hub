import React, {Component} from "react";
import {Button, Col} from "react-bootstrap";
import TagsSuggestInput from "./TagsSuggestInput.js";
import {fetchCities, fetchTags} from '../../services/restApi';

export default class SearchBar extends Component {

    render()
    {
        return (
            <div className="row search-row animated fadeInUp">
              <Col lg={4} sm={4} className="search-col relative locationicon">
                <i className="icon-location-2 icon-append"></i>

                <TagsSuggestInput
                  tags={this.props.cities}
                  onTagsChange={this.props.onCitiesChange}
                  placeholder="město, městská část"
                  onFetchSuggestionsRequest={fetchCities}/>

              </Col>
              <Col lg={4} sm={4} className="search-col relative">
                <i className="icon-docs icon-append"></i>

                <TagsSuggestInput
                  tags={this.props.tags}
                  onTagsChange={this.props.onTagsChange}
                  placeholder="sport, událost"
                  onFetchSuggestionsRequest={fetchTags}/>

              </Col>
              <Col lg={4} sm={4} className="search-col">
                <Button bsStyle="primary" className="btn-search btn-block" role="button" onClick={() => {
                  this.props.onSearchClick();
                    }}>
                        <i className="icon-search"></i>
                        <strong>Najít událost</strong>
                    </Button>
                </Col>
            </div>
        );

    }
}
