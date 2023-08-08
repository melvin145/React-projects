import React from 'react'
import '../App.css';
import { useState,useEffect } from 'react';
import {Notepage} from '../pages/Notepage'
import {Link} from 'react-router-dom'
export const Note=(props)=>{
      const getDate=(value)=>{
            let date=new Date(value).toLocaleDateString();
            console.log(date);
            return date;
      }

      const getTitle=(body)=>{
            let title=body.split('\n')[0];
            if(title.length > 45){
                  return title.slice(0,35);
            }
            return title;
      }
      const getContent=(note)=>{
            let title=getTitle(note.body)
            let content=note.body.replaceAll(title,'')
            return content;
      }
      return(
      <Link to={'/note/'+props.note.id}>
      <div className='note__container'>
            <div>
            <div className='note__title'> <h1>{getTitle(props.note.body)}</h1></div>
            <div className='note__body'> <p>{getContent(props.note)}</p></div>
            </div>
            <div className='note__date'><p>{getDate(props.note.date_updated)}</p></div>
      </div>
      </Link>)
}