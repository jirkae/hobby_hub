import React from 'react';
import { shallow } from 'enzyme';

import UserInfo from '../components/UserInfo';

describe('User info renders with different props', () => {

    it('renders without props', () => {
        expect(
            shallow(<UserInfo />).length
        ).toEqual(1);
    });

    it('renders with updateable prop', () => {
        expect(
            shallow(<UserInfo updateable />).length
        ).toEqual(1);
    });

});

describe('User info renders different content based on props', () => {

    it('Should render button when given updateable prop', () => {
        const wrapper = shallow(<UserInfo updateable />);
        expect(wrapper.find('Button').length).toEqual(1);
    });

    it('Should not render button when given updateable prop', () => {
        const wrapper = shallow(<UserInfo />);
        expect(wrapper.find('Button').length).toEqual(0);
    });

});