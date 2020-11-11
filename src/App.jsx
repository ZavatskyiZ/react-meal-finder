import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MealsList from './components/MealsList';
import Search from './components/Search'
import Meal from './components/Meal'
import Error from './components/Error'




function App() {
  const [mealsList, setMealsList] = React.useState([]);
  const [meal, setMeal] = React.useState({});


  //Searching meals
  const searchMeals =  text => {
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res => res.json())
    .then(data => setMealsList(data.meals))
    .then(data=> console.log(data))
  }
  //single meal
  const getMeal = async idMeal =>{
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then(data => setMeal(data.meals[0]))
  }
  
  

  return (
    <Router>
      <div className="search">
            <Search searchMeals={searchMeals}/>
          </div>
      <Switch>
      <Route exact path='/' render={props=>(
        <React.Fragment>
            {mealsList === null ? <Error/>:<MealsList getMeal={getMeal} mealsList={mealsList}/>}
        </React.Fragment>)}/>
        <Route exact path='/meal/:idMeal' render={props=>(
          <Meal {...props} getMeal={getMeal}  meal={meal}/>
            )}/>
      </Switch>
    </Router>
  );
}

export default App;
