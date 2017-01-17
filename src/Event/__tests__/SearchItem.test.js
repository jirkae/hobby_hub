import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchItem from '../components/SearchItem';

describe('Search item renders with different props', () => {
    const minProps = {id: 1, name: 'Name'};

    it('renders without crashing', () => {
        expect(
            shallow(<SearchItem { ...minProps } />).length
        ).toEqual(1);
    });

    it('links to correct page', () => {
        const wrapper = shallow(<SearchItem { ...minProps } />);
        expect(wrapper.find('Link').prop('to')).toEqual(`/events/${minProps.id}`);
    });

    it('renders with label when given prop error', () => {
        const wrapper = mount(<SearchItem { ...minProps } />);
        expect(wrapper.find('Link').text()).toEqual(minProps.name);
    });

});
