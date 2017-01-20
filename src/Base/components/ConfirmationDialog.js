/**
 * Created by martin.machacek on 20.1.2017.
 */
import React, { Component } from 'react';

class ConfirmationDialog extends Component {
    render() {
        let stateButtons;
        switch (this.props.type) {
            case 'OK-CANCEL':
                stateButtons = <div>
                    <button className="btn btn-primary" onClick={this.props.primaryAction}>Ok</button>
                    <button className="btn btn-danger" onClick={this.props.secondaryAction}>Zrušit</button>
                </div>;
                break;

            case 'YES-NO':
                stateButtons = <div>
                    <button className="btn btn-primary" onClick={this.props.primaryAction}>Ano</button>
                    <button className="btn btn-danger" onClick={this.props.secondaryAction}>Ne</button>
                </div>;
                break;

            case 'OK':
                stateButtons = <button className="btn btn-primary" onClick={this.props.primaryAction}>Ok</button>;
                break;

            case 'NONE':
            default:
                stateButtons = '';
                break;
        }

        return (
            <div className="confirmation">
                { this.props.children === undefined ? 'Požadovaná akce byla úspěšně dokončena' : this.props.children }
                { stateButtons }
            </div>
        )
    }
}

ConfirmationDialog.propTypes = {
    type: React.PropTypes.string.isRequired,
    primaryAction: React.PropTypes.func,
    secondaryAction: React.PropTypes.func,
};

export default ConfirmationDialog;