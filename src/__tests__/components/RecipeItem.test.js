import { shallow } from 'enzyme';
import React from 'react';
import RecipeItem from '../../components/RecipeItem';

const mockHistory = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: () => mockHistory()
    })
}));

const recipe = {
    idMeal: "52874",
    strMeal: "Beef and Mustard Pie",
    strMealThumb: "http://imae.jg"
};


describe('Testing <RecipeItem />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    const wrapper = shallow(
        <RecipeItem recipe={recipe} />
    );

    test('should render RecipeItem', () => { 
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.card-title').text().trim() ).toBe(recipe.strMeal);
    });

    test('should call history.push', () => {
        wrapper.find('button').prop('onClick')();
        expect( mockHistory).toHaveBeenCalled();
    })
    
    
})
