import React from 'react'
import style from './Cards.module.css'
function Cards({title,calories,image,ingredients}) {
    return (
        <div className={style.Cards}>
            <h1>
              {title}
            </h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>
             {calories}
            </p>
            <img src={image} alt=''></img>
        </div>
    )
}

export default Cards
