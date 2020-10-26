import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {simpleFetch} from '../helper/fetch';
import LazyImage from '../components/LazyImage'
import Loader from '../components/Loader';

const RecipePage = () => {

    const { mealId } = useParams();
    const [details, setDetails] = useState({});

    const { strMealThumb, strMeal, strCategory, strInstructions } = details;

    useEffect(() => {
        const getDetails = async () => {
            const resp = await simpleFetch(`/lookup.php?i=${mealId}`);
            setDetails(resp.meals[0]);
        }
        getDetails();
    }, [mealId]);

    const showIngredients = (recipe) => {
        let ingredients = [];

        for(let i = 1; i < 16; i++) {
            if(details[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={ `ingre${recipe[`strIngredient${i}`]}` } > {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]} </li>
                )
            }
        }

        return ingredients;

    }


    if(Object.keys(details).length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className="container mt-5">
           <div className="card mb-3" style={{width: '100%'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <LazyImage 
                            src={strMealThumb} 
                            alt={`image-${strMeal}`} 
                            styleClass="card-img" 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> {strMeal} </h5>
                            <p className="card-text text-secondary"> {strCategory} </p>
                            <ul>
                               {showIngredients(details)}
                            </ul>
                        </div>
                    </div>
                </div>
               
           </div>    
            <h3>Instructions</h3>
            <hr/>
            <p className="text-dark">
                {strInstructions}
            </p>
        </div>
    )
}

export default RecipePage
