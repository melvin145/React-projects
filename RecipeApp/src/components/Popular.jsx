import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
export const Popular=()=>{
      const [popular,setPopular]=useState([]);
    
      useEffect(()=>{
            getPopular();
      },[])

      const getPopular=async()=>{
           const check=localStorage.getItem('popular');
            if(check){
                  setPopular(JSON.parse(check))
            }
            else{
            const response= await fetch('https://api.spoonacular.com/recipes/random?apiKey=097ee7f99cd24a44b22831b73d10cc79&number=8');
            const data =await response.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            setPopular(data.recipes)
           }
      }
      return(
            <div className="popular__container">
                  <h1 className="heading">Popular</h1>
                  <div className='carousel'>
                        {popular.map((item)=>{
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