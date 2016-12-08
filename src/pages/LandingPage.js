import React, {Component} from "react";
import {  Button, Col } from "react-bootstrap";
import LatestEventsBox from "../components/events/LatestEventsBox.js";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import theme from "../css/theme.css";
import Autosuggest from 'react-autosuggest';

export default class LandingPage extends Component {
    constructor(params) {
        super(params);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);

        this.state = {
            city: [],
            tags: []
        };
    }

    handleButtonClick() {
        this.context.router.push({
            pathname: '/events',
            query: {
                city: this.state.city[0],
                tags: this.state.tags
            }
        });
    }

    handleCityChange(city) {
        this.setState({city})
    }

    handleTagsChange(tags) {
        this.setState({tags})
    }

    render() {

        const cityAutoComplete = (props) => {
            const {
                ...other
            } = props;

            const handleOnChange = (e, { method }) => {
                if (method === 'enter') {
                    e.preventDefault()
                } else {
                    props.onChange(e)
                }
            };

            const inputValue = (props.value && props.value.trim().toLowerCase()) || "";
            const inputLength = inputValue.length;

            let suggestions = mesta().filter((state) => {
                return state.name.toLowerCase().slice(0, inputLength) === inputValue
            });

            return (<Autosuggest theme={theme} ref={props.ref} suggestions={suggestions} shouldRenderSuggestions={(value) => value && value.trim().length > 0} getSuggestionValue={(suggestion) => suggestion.name} renderSuggestion={(suggestion) => <span>{suggestion.name}</span>} inputProps={{
              ...other,
              onChange: handleOnChange,
              placeholder: "město, městská část"
            }} onSuggestionSelected={(e, {suggestion}) => {
              props.addTag(suggestion.name)
            }}/>)
        };

        const tagsAutoComplete = (props) => {
            const {
                ...other
            } = props;

            const handleOnChange = (e, { method }) => {
                if (method === 'enter') {
                    e.preventDefault()
                } else {
                    props.onChange(e)
                }
            };

            const inputValue = (props.value && props.value.trim().toLowerCase()) || "";
            const inputLength = inputValue.length;

            let suggestions = tagy().filter((state) => {
                return state.name.toLowerCase().slice(0, inputLength) === inputValue
            });

            return (<Autosuggest theme={theme} ref={props.ref} suggestions={suggestions} shouldRenderSuggestions={(value) => value && value.trim().length > 0} getSuggestionValue={(suggestion) => suggestion.name} renderSuggestion={(suggestion) => <span>{suggestion.name}</span>} inputProps={{
              ...other,
              onChange: handleOnChange,
              placeholder: "sport, koníček"
            }} onSuggestionSelected={(e, {suggestion}) => {
              props.addTag(suggestion.name)
            }}/>)
        };

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
                      <div className="row search-row animated fadeInUp">
                        <Col lg={4} sm={4} className="search-col relative locationicon">
                          <div className="absoluteInputWrapper">
                            <i className="icon-location-2 icon-append"></i>
                            <TagsInput renderInput={cityAutoComplete} maxTags={1} value={this.state.city} onChange={this.handleCityChange}/>
                          </div>
                        </Col>
                        <Col lg={4} sm={4} className="search-col relative">
                          <div className="absoluteInputWrapper">
                            <i className="icon-docs icon-append"></i>
                            <TagsInput renderInput={tagsAutoComplete} maxTags={2} value={this.state.tags} onChange={this.handleTagsChange}/>
                          </div>
                        </Col>
                        <Col lg={4} sm={4} className="search-col">
                          <Button bsStyle="primary" className="btn-search btn-block" role="button" onClick={this.handleButtonClick}>
                            <i className="icon-search"></i>
                            <strong>Najít událost</strong>
                          </Button>
                        </Col>
                      </div>
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
                <LatestEventsBox/>
            </div>
        );
    }
}

function mesta() {
    return [
        {
            name: "Praha"
        }, {
            name: "Brno"
        }, {
            name: "Olomouc"
        }, {
            name: "Test"
        }, {
            name: "Zlín"
        }, {
            name: "Praha 7"
        }, {
            name: "Praha 8"
        }, {
            name: "Praha 125"
        }, {
            name: "Vrchlabí"
        }, {
            name: "Jilemnice"
        }, {
            name: "Ostrava"
        }, {
            name: "Berlín"
        }, {
            name: "Hrapa"
        }, {
            name: "Vsetín"
        }, {
            name: "Všeň"
        }, {
            name: "Aš"
        }, {
            name: "Pardubice"
        }, {
            name: "Oslo"
        }
    ]
}

function tagy() {
    return [
        {
            name: "Fotbal"
        }, {
            name: "Volejbal"
        }, {
            name: "Test"
        }, {
            name: "Golf"
        }, {
            name: "Deskové hry"
        }, {
            name: "Horolezectví"
        }, {
            name: "Basketbal"
        }, {
            name: "Házená"
        }, {
            name: "Trhání jablek"
        }, {
            name: "Pozorování ptáků"
        }, {
            name: "Astronomie"
        }

    ]
}

LandingPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
