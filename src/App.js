import React, { useState,useEffect } from 'react'
import Cards from './components/Cards'
import axios from 'axios'
import './App.css';
function App() {
  const [recipes,setRecipes]=useState([])
  const [inputText,setInputText]=useState("")
  const [clickButton,setClickButton]=useState("chicken")
  useEffect(()=>{
    axios.get(`https://api.edamam.com/search?q=${clickButton}&app_id=ad53c63a&app_key=1b0fb0c7a5954de05dfd74d0cafb8aca`)
    .then(response=>{
      setRecipes(response.data.hits)
    })
    .catch(error=>{
      console.log(error)
    })
  },[clickButton])

  const submitButton =(event)=>{
    event.preventDefault();
    setClickButton(inputText)
    setInputText('')
  }
  return (
    <div>
      <form className='search-form'
      onSubmit={submitButton}
      >
      <input 
      className='search-bar'
      type='text'
      value={inputText}
      onChange={(event)=>{
      setInputText(event.target.value)
      }
    }
      >
      </input>
      <button className='search-button'>Search duhh!!</button>
      </form>
      <div className='recipes'>
      {
        recipes.map(recipe=>(
        <Cards key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
        />
        ))
      }
</div>
    </div>
  )
}

export default App
