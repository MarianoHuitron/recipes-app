import React from 'react'
import LazyImage from './LazyImage';

const CategoryItem = ({ category, categorySelected, setCategorySelected }) => {
    const { strCategory, strCategoryThumb } = category;

    const selectCategory = cate => {
        setCategorySelected(cate);
    }


    return (
        <figure 
            className={`figure m-2 ${(strCategory === categorySelected) && 'border rounded border-secondary'}`} 
            style={{cursor: 'pointer'}} 
            onClick={ () => selectCategory(strCategory) }    
        >
            <LazyImage 
                src={ strCategoryThumb }
                alt={ `image-${strCategory}` }
                styleClass="rounded-circle category-img"
            />
            <p className="text-center"> {strCategory} </p>
        </figure>
    )
}

export default CategoryItem
