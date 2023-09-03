import React from 'react';
import { Main } from './Main';
import { Type } from './Type';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Recipe } from './Recipe';
import { Searched } from './Searched';

export const Pages=()=>{
      return(

            <Routes>
                  <Route path='/' element={<Main/>} />
                  <Route path='/cuisine/:type' element={<Type/>}/>
                  <Route path='/detail/:id' element={<Recipe/>}/>
                  <Route path='/search/:name' element={<Searched/>}/>
            </Routes>
         
      )
}
