import React, { Component } from 'react';
import { FormGroup, Col } from 'react-bootstrap'

class ConditionalErrorLabel extends Component {
    render() {
        const { error, text } = this.props;
        return (
            <FormGroup>
                <Col smOffset={3} sm={9}>
                    { error ? <label>{ text }</label> : ""}
                </Col>
            </FormGroup>
        )
    };
}

ConditionalErrorLabel.propTypes = {
    error: React.PropTypes.any,
    text: React.PropTypes.string.isRequired,
};

export default ConditionalErrorLabel;