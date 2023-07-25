
import './App.css';
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


export default App;


