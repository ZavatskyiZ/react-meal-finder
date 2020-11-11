import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Ingredients({meal}) {
    const ingredients = [];
    

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} — ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
    }
   
    return (
        <div className="ingredients-list"> 
          {ingredients.map(ing => 
            <li key={uuidv4()}>{ing}</li>)} 
        </div>
    )
}

export default Ingredients
