import React, { Component } from 'react';
import classNames from 'classnames';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTabId: 0,
        };
    }

    selectTab(event, tabId) {
        event.preventDefault();
        this.setState({ activeTabId: tabId })
    }

    render() {
        const { tabs } = this.props;
        const { activeTabId } = this.state;

        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabs.map(({ label }, index) => (
                        <li
                            key={index}
                            role="presentation"
                            className={classNames({ active: index === activeTabId })}
                        >
                            <a href="#" onClick={event => this.selectTab(event, index)}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    {tabs[activeTabId].render()}
                </div>
            </div>
        );
    }
}
