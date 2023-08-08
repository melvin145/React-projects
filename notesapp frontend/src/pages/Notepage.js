import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
export const Notepage=({history})=>{
      const {id}=useParams()
      const navigate=useNavigate()
      const [note,setNote]=useState([]);
      useEffect(()=>{
            getNote();
      },[])

      let getNote = async () => {
            if(id === 'new'){
                  return
            }
            const response= await fetch('http://127.0.0.1:8000/notes/'+id)
            const data =await response.json();
            setNote(data);
      }

      const updatenote=async()=>{
            fetch('http://127.0.0.1:8000/notes/'+id+'/update',{
                  method:"PUT",
                  headers:{
                        "Content-Type":"application/json",
                  },
                  body:JSON.stringify(note)
            })
      }

      const handleSubmit=()=>{
            updatenote()
            navigate('/');
      }
      const handleChange=(value)=>{
            setNote(note=>({
                  ...note,'body':value
            }))

      }
      const handleDelete=async()=>{
            fetch('http://127.0.0.1:8000/notes/'+id+'/delete',{
                  method:'DELETE',
                  headers:{
                        'Content-Type':'application/json'
                  }
            })
            navigate('/')
      }
      const addnote=async()=>{
            fetch('http://127.0.0.1:8000/notes/new',{
                  method:'POST',
                  headers:{
                        'Content-Type':'application/json'
                  },
                  body:JSON.stringify(note)
            })
            navigate('/')
      }
      return(<div className='Notepage__container yellow'>
            <div className='header'>
                  <button onClick={handleSubmit}><i class='bx bx-left-arrow-alt'></i></button>
                  {id !== 'new' ? 
                  (<button onClick={handleDelete}><i id="delete" class='bx bxs-trash-alt'></i></button>)
                  :(<button className='add' onClick={addnote}>Done</button>
                  )}
      
            </div>
            <div>
                  <textarea onChange={(e)=>handleChange(e.target.value)} value={note?.body}></textarea>
            </div>
            </div>)
}