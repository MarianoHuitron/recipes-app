import { shallow } from 'enzyme';
import React from 'react';
import Categories from '../../components/Categories';

const setCategorySelected = jest.fn();
const categorySelected = 'Seafood';

describe('Testing <Categories />', () => {

    // let useEffect;

    // const mockUseEffect = () => {
    //     useEffect.mockImplementationOnce(f => f());
    // }

    // beforeEach(() => {
    //     useEff
    // })
    
    test('should render component', () => {
        const wrapper = shallow(
            <Categories 
                categorySelected={ categorySelected }
                setCategorySelected={ setCategorySelected }
            />
            
        );

        expect( wrapper ).toMatchSnapshot();
    })
    

})
