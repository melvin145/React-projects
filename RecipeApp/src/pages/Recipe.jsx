import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
export const Recipe=()=>{
      const params=useParams();
      const[recipe,setRecipe]=useState([]);
      const[ingredients,setIngredients]=useState([]);
      useEffect(()=>{
            getRecipe()
      },[params.id])

      const getRecipe=async()=>{
          const response=await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=514fe413191a43a6b2d9624b4c200eb5`)
          const data=await response.json();
          setRecipe(data)
          setIngredients(data.extendedIngredients)
          
      }
      return(
            <div className='detail__container'>
                  <div className='left'>
                        <div className='recipe__title'>
                              {recipe.title}
                        </div>
                        <div className='recipe__summary'>
                              <p dangerouslySetInnerHTML={{__html:recipe.summary}}></p>
                        </div>
                        <div className='recipe__instruction'>
                              <h1>Instruction</h1>
                              <p dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>
                        </div>
                  </div>
                  <div className='right'>
                        <div className='recipe__image'>
                              <img src={recipe.image} alt="" />
                        </div>
                        <div className='other__detail'>
                              <div className='box'>
                                    <h4>time</h4>
                                    <span>{recipe.readyInMinutes}</span>
                              </div>
                              <div className='box'>
                              <h4>serving</h4>
                                    <span>{recipe.servings}</span>
                              </div>
                              <div className='box'>
                              <h4>price</h4>
                              <span>{recipe.pricePerServing}</span>
                              </div>
                        </div>
                        <div className='recipe__ingredients'>
                              <h1 >Ingredients</h1>
                              <ul>
                                   {
                                    ingredients.map((ing)=>{
                                    return(<li>{ing.original}</li>)})
                                    }
            
                              </ul>
                        </div>
                  </div>
            </div>
      )
}