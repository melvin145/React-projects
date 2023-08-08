import React from 'react'
import {Link} from 'react-router-dom'
import  '../App.css';
import {ReactComponent as AddLogo} from '../assets/add.svg'
export const Addbutton=()=>{
      return(
            <Link to='note/new'>
            <div className='add__button'>
                  <AddLogo />
            </div>
            </Link>
      )
}