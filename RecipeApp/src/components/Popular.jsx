import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
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
            const response= await fetch('https://api.spoonacular.com/recipes/random?apiKey=097ee7f99cd24a44b22831b73d10cc79&number=10');
            const data =await response.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            setPopular(data.recipes)
           }
      }
      var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
      return(
            <div className='recipe__container'>
            {popular.map((item)=>{
                  return(
                        <Link to={`/detail/${item.id}`}>
                        <div className='card'>
                        <div className='card__gradient'></div>
                        <img src={item.image } alt="" />
                        <div className='card__details'>
                        <span className='title'>{item.title}</span>
                        <span className='time'>{item.time}</span>
                        </div>
                  </div>
                  </Link>)
            })}
      
      </div>
            /*<div className="popular__container">
                  <h1 className="heading">Popular</h1>
                  <div  className='carousel'>
                        {popular.map((item)=>{
                                    return(
                              <Link to={`/detail/${item.id}`}>
                              <div   className="item__container">
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
                  <Slider {...settings}>
                        <div>
                        <h3>1</h3>
                        </div>
                  </Slider>
            </div>*/
      )
}