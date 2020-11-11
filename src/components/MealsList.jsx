import React from 'react'
import MealItem from './MealItem'

const MealsList = ({ mealsList, getMeal}) => {
    return (
        <div className="meal-grid">
            {mealsList.map(meal =>
            <MealItem key={meal.idMeal} getMeal={getMeal} meal={meal}/>)}
        </div>
    )
}

export default MealsList
