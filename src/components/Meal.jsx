import React from 'react'
import Ingredients from './Ingredients'



const Meal = ({ meal, match, getMeal }) => {

    React.useEffect(() => {
        getMeal(match.params.idMeal); 
        // eslint-disable-next-line
    }, []);

    
    const {
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb
    } = meal;

    
   
    return (
        <div className="meal-page">
            <section className='meal-header'>
                <h3>{strMeal}</h3>
            </section>
            <section className="picture">
                <img src={strMealThumb} alt={strMeal}/>
            </section>
            <section className="meal-about">
                <p><span><i className="fas fa-utensils"></i></span> {strCategory}</p>
                <p><span><i className="fas fa-globe-europe"></i></span> {strArea}</p>
            </section>
            <section className="ingredients">
                <h4>Ingredients:</h4>
                <Ingredients meal={meal}/>
            </section>
            <section className="instructions">
                <h4>Recipe:</h4>
                <p>{strInstructions}</p>
            </section>
        </div>
    )
}

export default Meal
