import React from 'react';
import {Link} from 'react-router-dom';
export const Navbar=()=>{
      return(<div>
           <Link to='/Home'>Home</Link>
           <Link to='/profile'>Profile</Link> 
           <Link to='/Contact'>Contact</Link>
      </div>)
}