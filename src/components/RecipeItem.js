import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LazyImage from './LazyImage'

const RecipeItem = ({ recipe }) => {
    
    const history = useHistory();

    const { strMeal, idMeal, strMealThumb } = recipe;
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <LazyImage 
                    src={ strMealThumb }
                    alt={ `image-${strMeal}` }
                    styleClass="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title"> {strMeal} </h5>
                   
                </div>
                <div className="card-footer">
                <button 
                    className="btn btn-block btn-secondary"  
                    onClick={() => history.push(`/view/${idMeal}`)}    
                >See More</button>
                </div>
            </div>
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default RecipeItem
