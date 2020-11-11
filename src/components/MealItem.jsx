import React from 'react'
import { Link } from 'react-router-dom'

const MealItem = ({meal:{strMeal, strMealThumb, strCategory, strArea, idMeal }, getMeal, }) => {
    return (
        <div className="meal-item">
            <div className="meal-pic">
                <img src={strMealThumb} alt={strMeal} className="meals-img"/>
            </div>
            <div className="meal-info">
                <h3>{strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <div className="meal-link">
                    <Link to={`/meal/${idMeal}`} className="full-recipe">Full Recipe</Link>
                </div>
            </div>
        </div>
    )
}

export default MealItem
