import React from 'react'
import '../App.css'
import {useState,useEffect} from 'react'
import Cupcake from '../assets/img/cupcake.png'
import Bread from '../assets/img/bread.png'
import Cocktail from '../assets/img/cocktail.png'
import Donut from '../assets/img/donut.png'
import Sauce from '../assets/img/tomato.png'
import Salad from '../assets/img/salad.png'
import Soup from '../assets/img/hot-soup.png'
import Nachos from '../assets/img/nachos.png'
import { BrowserRouter, Link,NavLink } from 'react-router-dom'
export const Categories=()=>{

            const [Item,setItem]=useState([]);
            useEffect(()=>{
                  setItem([ 
                        {
                        'item':'dessert',
                        'img':Cupcake,
                        },{
                        'item':'bread',
                         'img':Bread,    
                        }
                        ,{
                        'item':'drinks',
                        'img':Cocktail,    
                        }
                        ,
                        {
                              'item':'Snack',
                              'img':Donut,    
                        }
                        ,
                        {
                              'item':'Sauce',
                              'img':Sauce,    
                        }
                        ,
                        {
                              'item':'Salad',
                              'img':Salad,    
                        },
                        ,
                        {
                              'item':'Soup',
                              'img':Soup,    
                        }
                        ,
                        {
                              'item':'appetizer',
                              'img':Nachos,    
                        },       
                  
                  ])
            },[])
      return(
            
            <div className='categories__container'>
         
                  <nav className='categorie__list'>
                  
                  {Item.map((item)=>{
                        return(
                  <NavLink to={`/cuisine/${item.item}`}>
                        <div className='categorie__link'>
                              <div className='logo'>
                              <img src={item.img} alt="" />
                              </div>
                              <span>{item.item}</span>
                        </div>
                  </NavLink>
                    )
                        
                  })}
       
              
                  </nav>
 
            </div>
           
      )
}