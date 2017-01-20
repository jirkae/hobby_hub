import React from 'react';
import { shallow, mount } from 'enzyme';

import ConditionalErrorLabel from '../components/ConditionalErrorLabel';

describe('Error label renders with different props', () => {
    let text = 'some text';

    it('renders without crashing', () => {
        expect(
            shallow(<ConditionalErrorLabel text={text} />).length
        ).toEqual(1);
    });

    it('renders without label when not given error prop', () => {
        const wrapper = mount(<ConditionalErrorLabel text={text} />);
        expect(wrapper.render().find('label').length).toEqual(0);
    });

    it('renders with label when given prop error', () => {
        const wrapper = mount(<ConditionalErrorLabel error="true" text={text} />);
        expect(wrapper.render().find('label').length).toEqual(1);
    });

});
