import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import SearchBar from '../components/SearchBar';

describe('Search bar renders and behaves correctly', () => {
    const onSearchClick = () => {};
    const minProps = {onSearchClick: onSearchClick};

    it('renders without crashing', () => {
        expect(
            shallow(<SearchBar {...minProps } />).length
        ).toEqual(1);
    });

    it('calls function on button click', () => {
        const onSearchClick = sinon.spy();
        const wrapper = mount(<SearchBar onSearchClick={onSearchClick} />);
        wrapper.find('button').simulate('click');
        expect(onSearchClick.calledOnce).toEqual(true);
    });

});
