import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import RecipesList from '../components/RecipesList';
import { simpleFetch } from '../helper/fetch';

const SearchPage = () => {

    const { meal } = useParams();
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const getRecipes = async () => {
            const resp = await simpleFetch(`/search.php?s=${meal}`);
            setRecipes(resp.meals);
        }
        getRecipes();
    }, [setRecipes, meal]);



    return (
        <div className="container mt-5">
            <Hero />
            <h2 className="mt-4">
                Recipes with <span className="text-secondary">"{meal}"</span> 
            </h2>
            {!recipes ? (
               <div className="alert alert-secondary text-center" role="alert">
                    <strong>Sorry!</strong> no data found
                </div>
            ) : (
                <RecipesList recipes={ recipes } />
            )}
           
        </div>
    )
}

export default SearchPage;
