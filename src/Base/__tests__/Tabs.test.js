import React from 'react';
import { shallow, mount } from 'enzyme';

import Tabs from '../components/layout/Tabs';

describe('Tabs render with different props', () => {
    const tabs = [
        { label: 'Přihlášení', render: () => {} },
        { label: 'Registrace', render: () => {} }
    ];

    it('renders without crashing', () => {
        expect(
            shallow(<Tabs tabs={tabs} />).length
        ).toEqual(1);
    });

    it('contains exactly two tabs', () => {
        const wrapper = mount(<Tabs tabs={tabs} />);
        expect(wrapper.render().find('li').length).toEqual(2);
    });

    it('contains correct labels in tabs', () => {
        const wrapper = mount(<Tabs tabs={tabs} />);
        expect(wrapper.find('li').at(0).text()).toEqual(tabs[0].label);
        expect(wrapper.find('li').at(1).text()).toEqual(tabs[1].label);
    });

});
