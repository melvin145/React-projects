import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
export const Vegetarian=()=>{
      const [vegetarian,setVegetarian]=useState([]);
    
      useEffect(()=>{
            getVegetarian();
      },[])

      const getVegetarian=async()=>{
           const check=localStorage.getItem('vegetarian');
            if(check){
                  setVegetarian(JSON.parse(check))
            }
            else{
            const response= await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=097ee7f99cd24a44b22831b73d10cc79&diet=vegetarian');
            const data =await response.json();
            localStorage.setItem('vegetarian',JSON.stringify(data.recipes))
            setVegetarian(data.recipes)
           }
      }
      console.log(vegetarian)
      return(
            <div className="vegetarian__container">
                  <h1 className="heading">Vegetarian</h1>
                  <div className='carousel'>
                        {vegetarian.map((item)=>{
                                    return(
                              <Link to={`/detail/${item.id}`}>
                              <div className="item__container">
                                    <div className='item_gradient'></div>
                                    <img src={item.image } alt="" />
                                    <div className='item__details'>
                                    <span className='title'>{item.title}</span>
                                    <span className='time'>{item.readyInMinutes} min</span>
                                    </div>
                                    </div>
                              </Link>
                              )
                        })}
                  </div>
            </div>
      )
}