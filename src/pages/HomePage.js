import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import RecipesList from '../components/RecipesList';
import { simpleFetch } from '../helper/fetch';

const HomePage = () => {

    
    const [categorySelected, setCategorySelected] = useState('Beef');
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const getMeal = async () => {
            const resp = await simpleFetch(`/filter.php?c=${categorySelected}`);
            setRecipes(resp.meals);
        }
        getMeal();
    }, [categorySelected]);

    return (
        <div className="container mt-5">
            <Hero />
            <Categories 
                categorySelected={ categorySelected }
                setCategorySelected={ setCategorySelected }
            />
            <h2 className="mt-4">Recipes with <span className="text-secondary">{categorySelected}</span> </h2>
            <RecipesList recipes={ recipes } />
        </div>
    )
}

export default HomePage;