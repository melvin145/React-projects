import React from 'react';
import {Categories} from './Categories'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const Search=()=>{
      const navigate=useNavigate();
      const[input,setInput]=useState('');
      const submitHandler=(e)=>{
            e.preventDefault();
            navigate('/search/'+input);
            
      }
      return(
            <div className='search__container'>
                   {//  <div className='search__header'>
                        //<h1>What Recipes are you looking for today</h1>
                  //</div>
                  }
                  <form className='search' onSubmit={submitHandler}>
                        <input value={input} placeholder='Search.....' onChange={(e)=>{setInput(e.target.value)}} type="text" />

                        <div className='search__btn'><i class='bx bx-search-alt-2'></i></div>
                  </form>
                  <Categories/>
            </div>
      )
}