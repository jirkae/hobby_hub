import React from 'react';
import { shallow, mount } from 'enzyme';

import ConfirmationDialog from '../components/ConfirmationDialog';

describe('ConfirmationDialog renders with different props', () => {

    it('renders with invalid type', () => {
        expect(
            shallow(<ConfirmationDialog type="NEJAKABLBINA"/>).length
        ).toEqual(1);
    });

    it('renders without buttons with type NONE', () => {
        const wrapper = mount(<ConfirmationDialog type="NONE" />);
        expect(wrapper.render().find('button').length).toEqual(0);
    });

    it('renders one button with type OK', () => {
        const wrapper = mount(<ConfirmationDialog type="OK" />);
        expect(wrapper.render().find('button').length).toEqual(1);
    });

    it('renders two buttons with type OK-CANCEL', () => {
        const wrapper = mount(<ConfirmationDialog type="OK-CANCEL" />);
        expect(wrapper.render().find('button').length).toEqual(2);
        expect(wrapper.find('button').at(0).text()).toEqual('Ok');
        expect(wrapper.find('button').at(1).text()).toEqual('Zrušit');
    });

    it('renders two buttons with type YES-NO', () => {
        const wrapper = mount(<ConfirmationDialog type="YES-NO" />);
        expect(wrapper.render().find('button').length).toEqual(2);
        expect(wrapper.find('button').at(0).text()).toEqual('Ano');
        expect(wrapper.find('button').at(1).text()).toEqual('Ne');
    });

});
