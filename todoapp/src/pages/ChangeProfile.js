import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App'

export const ChangeProfile=()=>{
      const {setusername}=useContext(AppContext);
      const [newusername,setnewusername]=useState('');
      return(
      <div>
      <input type='text' onChange={((event)=>{
            setnewusername(event.target.value);
      })}></input>
      <h1>the new user name is {newusername}</h1>
      <button onClick={setusername(newusername)}>Change</button>
      </div>
      );
}