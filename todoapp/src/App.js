
/*import './App.css';
import {useState} from 'react';

function App() {
  const [input,setinput]=useState('');
  const [todolist,settodolist]=useState([]);
  const addtodo=()=>{
        const task={
          id:todolist.length===0?1:todolist[todolist.length-1].id+1,
          taskName:input
        }
        settodolist([...todolist,task]);
        console.log(todolist);
  }
  const deleteTodo=(id)=>{
        const newlist=todolist.filter((todo)=>{
          return todo.id!==id;
        })
        settodolist(newlist);
  }
  return (
    <div className="App">
      <div className="todo__container">
      <div className='add__todo'>
        <input type='text' placeholder='add todo' onChange={(e)=>{
          setinput(e.target.value);
        }}></input>
        <button onClick={addtodo}>ADD</button>
      </div>
      <div className='todo__list'>
        {todolist.map((todo)=>{
         return <div className='todo__item'>
                <h1>{todo.taskName}</h1>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </div>
        })}
      </div>
      </div>
    </div>
  );
}


export default App;*/
import React from "react";
import './App.css'
import {useState,useContext} from 'react';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';
import {Link} from 'react-router-dom';
import {Navbar} from './pages/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { createContext } from "react";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

export const  AppContext=createContext();
function App(){
  const [username,setusername]=useState('melvin');
  const client=new QueryClient();
  return(
    <div className='App'>
  <QueryClientProvider client={client}>
    <AppContext.Provider value={{username,setusername}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </AppContext.Provider>
  </QueryClientProvider>
    </div>
  );
}
export default App;