import React, { Component } from 'react';
import { FormGroup, Col } from 'react-bootstrap'

class ConditionalErrorLabel extends Component {
    render() {
        return (
            <FormGroup>
                <Col smOffset={3} sm={9}>
                    {this.props.error ? <label>Nastala neočekávaná chyba</label> : ""}
                </Col>
            </FormGroup>
        )
    };
}

ConditionalErrorLabel.propTypes = {
    error: React.PropTypes.any,
};

export default ConditionalErrorLabel;