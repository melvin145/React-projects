import React, { useState } from 'react';
import {useRef,useEffect} from 'react';
import YoutubeText from '../assets/img/yt-logo-text.svg'
import YoutubeLogo from '../assets/img/yt-logo.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import profile from '../assets/img/icons8-test-account-96.png'
export const Navbar=()=>{
      const [input,setInput]=useState('');
      const navigate=useNavigate()
      const submitHandler=(e)=>{
            console.log('helo')
            e.preventDefault();
            navigate('/search/'+input);
      }
      const ToggleRef=useRef();
      const showSidebar=()=>{
            const sidebar=document.getElementById("sidebar");
            const toggle=ToggleRef.current;
            sidebar.classList.toggle("show-sidebar");
      }
      return(
            <div className='navbar__container '>
                  <div className='logo__container'>
                        <div className='toggle' id='toggle'>
                              <i class='bx bx-menu' ref={ToggleRef} onClick={showSidebar}></i>
                        </div>
                        <div className='youtube__logo'>
                      <Link to={'/'}><img src={YoutubeLogo} alt="" /> </Link>  
                        
                        </div>
                  </div>
                  <form className='search' onSubmit={submitHandler} >
                        <input placeholder='Search..'value={input} type="text" onChange={(e)=>{setInput(e.target.value)}} />

                  </form>
                  <div className='signup'>
                        <img src={profile} alt="" />
                  </div>
            </div>
      );
}