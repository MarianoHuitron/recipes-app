import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

const mockHistory = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: () => mockHistory()
    })
}));

describe('Testing <Navbar />', () => {
    
    const wrapper = shallow(<Navbar /> );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('simulate submit when input is empty', () => {
        wrapper.find('input').simulate('change', {
            target: {
                value: ''
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect( mockHistory ).not.toHaveBeenCalled();

    });

    test('simulate submit when input has change', () => {
        wrapper.find('input').simulate('change', {
            target: {
                value: 'Fish'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect( mockHistory ).toHaveBeenCalled();

    })
    
    

})
