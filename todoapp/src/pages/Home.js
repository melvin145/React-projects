import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../App'
import ReactDOM from 'react-dom/client';
export const Home=()=>{
      const {username}=useContext(AppContext);
      return (
            <div><h1>hi iam {username}</h1></div>
      );
}