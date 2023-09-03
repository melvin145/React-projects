import React from "react";
import '../App.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/undraw_cooking_p7m1.svg'
export const Sidebar=()=>{
      const Showmenu=()=>{
            const sidebar=document.querySelector(".sidebar__container");
            sidebar.classList.toggle("expander");
            const body=document.getElementById("App");
            body.classList.toggle("bodypad");
      }
      return (
            <div className="sidebar__container">
                  <nav className="nav">
                   <div className="nav__top">
                     <div className="nav__header">
                       <i class='bx bx-menu' onClick={Showmenu}></i>
                       <span className="nav__logo">Recipe</span>
                      </div>
                      <div className="nav__list">
                      <NavLink  to={'/'}><div className="nav__link">
                          <i class='bx bx-home-alt-2'></i>
                          <span>Home</span>
                        </div>
                        </NavLink>
                        <div className="nav__link">
                        <i class='bx bx-bowl-rice'></i>
                          <span>All Recipe</span>
                        </div>
                        <div className="nav__link">
                        <i class='bx bx-folder'></i>
                        <span>favourite</span>
                        </div>
                        <div className="nav__link">
                        <i class='bx bxs-contact'></i>
                          <span>Contact</span>
                        </div>
                      </div>
                  </div>
    
                  </nav>
            </div>
      )
}