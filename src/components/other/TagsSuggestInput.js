import React, {Component} from "react";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import Autosuggest from 'react-autosuggest';

export default class TagsSuggestInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            suggestions: []
        };
    }

    fetchSuggestions = (value) => {
      this.props.onFetchSuggestionsRequest(value)
      .then((results) => {
            this.setState({suggestions: results});
      })
      .catch((err) => this.setState({suggestions: []}));
    }

    render() {
        const autosuggest = (props) => {

            const {
                addTag,
                ...other
            } = props;

            const handleOnChange = (e, {newValue, method}) => {
                if (method === 'enter') {
                    e.preventDefault()
                } else {
                    props.onChange(e)
                }
            }

            const inputValue = (props.value && props.value.trim().toLowerCase()) || "";
            const inputLength = inputValue.length;

            let suggestions = this.state.suggestions.filter((suggestion) => {
                return suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
            });

            return (<Autosuggest
              ref={props.ref}
              suggestions={suggestions}
              onSuggestionsFetchRequested={(e) => {this.fetchSuggestions(e)}}
              onSuggestionsClearRequested={() => {this.setState({suggestions: []})}}
              shouldRenderSuggestions={(value) => value && value.trim().length > 0}
              getSuggestionValue={(suggestion) => suggestion.name}
              renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
              shouldRenderSuggestions={(value) => {return value.length < 2 ? false : true}}
              inputProps={{
                ...other,
                onChange: handleOnChange,
                placeholder: this.props.placeholder
              }}
              onSuggestionSelected={(e, {suggestion}) => {
                props.addTag(suggestion.name);
              }}/>)

        };

        return <TagsInput
          renderInput={autosuggest}
          addOnBlur={true}
          addKeys={[9, 13, 32]}
          value={this.props.tags}
          onChange={(e) => {
            this.props.onTagsChange(e)
        }}/>
    }
}