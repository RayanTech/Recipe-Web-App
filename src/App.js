import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon, InlineIcon } from '@iconify/react';
import shallowPanOfFood from '@iconify-icons/openmoji/shallow-pan-of-food';


function App() {
  const APP_ID = "3fd906f9";
  const APP_KEY = "e8e384b442313e211d81209f1c71fcb8";
 

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(()=>{
    getfood();
  }, [query]); 


  const getfood = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1 className="logo">Foodo!</h1>
      <Icon className="icon" icon={shallowPanOfFood} width="150" height="150" />
      <h3 className="slogan">What you gonna eat today?</h3>

    <div className="bar">
      {/*Search Bar*/}
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className="search-bar" value={search} onChange={updateSearch}/>
        <button  type='submit' className='search-button'> Search </button>
      </form>
      </div>

      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title= {recipe.recipe.label}
            calories= {recipe.recipe.calories}
            image ={recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
        />
        ))};
        </div>

    </div>
  );
}

export default App;
