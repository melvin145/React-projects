import React from "react";
import {useState,useEffect} from 'react';
import { Popular } from "../components/Popular";
import { Vegetarian } from "../components/Vegetarian";
import { Protein } from "../components/Protein";
import {BrowserRouter} from 'react-router-dom';

export const Main=()=>{
      return(
            <div className="main__container">
                  <div className="container">
                        <Popular/>
                        {//<Vegetarian/>
                        //<Protein/>
                  }
                  </div>
            </div>
      )
}