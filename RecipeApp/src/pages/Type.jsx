import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Type=()=>{
      const params=useParams()
      console.log(params.type)
      const[recipe,setRecipe]=useState([]);
      useEffect(()=>{
            getRecipe(params.type)
      },[params.type])

      const getRecipe=async(name)=>{
          const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=514fe413191a43a6b2d9624b4c200eb5&type=${name}`)
          const data=await response.json();
          console.log(data)
          setRecipe(data.results)
          
      }
      return(
            <div className='recipe__container'>
                  {recipe.map((item)=>{
                        return(
                              <Link to={`/detail/${item.id}`}>
                              <div className='card'>
                              <div className='card__gradient'></div>
                              <img src={item.image } alt="" />
                              <div className='card__details'>
                              <span className='title'>{item.title}</span>
                              <span className='time'>{item.protein}</span>
                              </div>
                        </div>
                        </Link>)
                  })}
            
            </div>
      )
}
