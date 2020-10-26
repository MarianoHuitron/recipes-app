import React from 'react'
import PropTypes from 'prop-types';
import Loader from './Loader';
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes }) => {

    if(recipes.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className="mt-4">       
            <hr/>
            <div className="row row-cols-1 row-cols-md-3">
                {recipes.map(recipe => (
                    <RecipeItem 
                        key={recipe.idMeal}
                        recipe={ recipe }
                    />
                ))}
            </div>
           
        </div>
    )
}

RecipesList.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default RecipesList
