import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../components/Hero';

describe('Testing <Hero />', () => {
    test('should render hero component', () => {
        const wrapper = shallow(<Hero />);
        expect( wrapper ).toMatchSnapshot();
    })
    
})
