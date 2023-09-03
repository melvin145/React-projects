import { useState } from 'react'
import './App.css'
import {Sidebar} from './components/Sidebar';
import {Search} from './components/Search'
import {Main} from './pages/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Pages } from './pages/Pages';
function App() {

  return (

    <div className='App' id='App'>
        <Sidebar/>
        <Search/>
        <Pages/>
    </div>
 
  )
}

export default App
