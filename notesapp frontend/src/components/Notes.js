import React from 'react';
import '../App.css';
import {useState,useEffect} from 'react';
import {Note} from './Note'
import {Link} from 'react-router-dom'

export const Notes=()=>{
      let [notes,setNotes]=useState([]);
      useEffect(()=>{
            getNotes()}
      ,[]);
      let getNotes= async()=>{
            let response =  await fetch('http://127.0.0.1:8000/notes');
            let data=await response.json()
            setNotes(data)
      }
      console.log(notes)
      return(
            <div className='notes__container'>
               {notes.map((note,index)=>{
                  return <Note note={note}/>
               })}
            </div>
      )
}