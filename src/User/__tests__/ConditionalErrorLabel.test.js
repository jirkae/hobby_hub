import React from 'react';
import { shallow, mount } from 'enzyme';

import ConditionalErrorLabel from '../components/ConditionalErrorLabel';

describe('Error label renders with different props', () => {

    it('renders without crashing', () => {
        expect(
            shallow(<ConditionalErrorLabel />).length
        ).toEqual(1);
    });

    it('renders without label when not given any props', () => {
        const wrapper = mount(<ConditionalErrorLabel />);
        expect(wrapper.render().find('label').length).toEqual(0);
    });

    it('renders with label when given prop error', () => {
        const wrapper = mount(<ConditionalErrorLabel error="true" />);
        expect(wrapper.render().find('label').length).toEqual(1);
    });

});
