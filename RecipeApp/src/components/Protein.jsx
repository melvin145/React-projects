import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
export const Protein=()=>{
      const [protein,setProtein]=useState([]);
    
      useEffect(()=>{
            getProtein();
      },[])

      const getProtein=async()=>{
           const check=localStorage.getItem('protein');
            if(check){
                  console.log(protein)
                  setProtein(JSON.parse(check))
            }
            else{
            const response= await fetch('https://api.spoonacular.com/recipes/findByNutrients?apiKey=097ee7f99cd24a44b22831b73d10cc79&minProtein=15&maxFat=10&maxCarbs=70&number=8');
            const data =await response.json();
            console.log(data)
            localStorage.setItem('protein',JSON.stringify(data))
            setProtein(data)
           }
      }
      return(
            <div className="protien__container">
                  <h1 className="heading">Protein Rich</h1>
                  <div className='carousel'>
                        {protein.map((item)=>{
                                    return(
                              <Link to={`/detail/${item.id}`}>
                              <div className="item__container">
                                    <div className='item_gradient'></div>
                                    <img src={item.image } alt="" />
                                    <div className='item__details'>
                                    <span className='title'>{item.title}</span>
                                    <span className='time'>{item.protein}</span>
                                    </div>
                                    </div>
                              </Link>
                              )
                        })}
                  </div>
            </div>
      )
}