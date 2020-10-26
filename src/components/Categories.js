import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { simpleFetch } from '../helper/fetch';
import CategoryItem from './CategoryItem';
import Loader from './Loader';


const Categories = ({ categorySelected, setCategorySelected }) => {

    const [categories, setCategories] = useState([]);
    const divScroll = useRef();

    useEffect(() => {
        const getCategories = async () => {
            const resp = await simpleFetch('/categories.php');
            setCategories(resp.categories);
        }
        getCategories();
    }, [setCategories]);

    const scroll = (e) => {
        const target = document.getElementById('horizontalDiv');
        const toLeft = e.deltaY < 0 && target.scrollLeft > 0;
        const toRight = e.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientHeight;
        
        if(toLeft || toRight) {
            target.scrollLeft += e.deltaY;
        }
    }
   
    if(categories.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div 
            className="mt-4 d-inline-flex overflow-auto scroll-horizontal" 
            style={{width: '100%'}}
            id="horizontalDiv"
            ref={ divScroll }
            onWheel={ scroll }           
        >
            {categories.map(category => (
                <CategoryItem 
                    key={ category.idCategory }
                    category={ category }
                    categorySelected={ categorySelected }
                    setCategorySelected={ setCategorySelected }
                />
            ))}
        </div>
    )
}

Categories.propTypes = {
    categorySelected: PropTypes.string.isRequired,
    setCategorySelected: PropTypes.func.isRequired
}

export default Categories
