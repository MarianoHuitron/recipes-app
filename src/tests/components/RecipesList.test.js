import React from 'react';
import { mount, shallow } from 'enzyme';
import RecipesList from '../../components/RecipesList';

const recipes = [{
    idMeal: "52874",
    strMeal: "Beef and Mustard Pie",
    strMealThumb: "http://imae.jg"
}];

describe('Testing <RecipesList />', () => {

    test('should render RecipesList component', () => {
        const wrapper = shallow(<RecipesList recipes={recipes} />  );
        expect( wrapper ).toMatchSnapshot();
    })

    test('should render <Loader />', () => {
        const recipes = [];
        const wrapper = shallow( <RecipesList  recipes={recipes} /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('Loader').exists() ).toBe(true);
    })
    
    
})
