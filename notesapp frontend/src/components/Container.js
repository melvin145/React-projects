import React  from "react"
import '../App.css'
import {Header} from './Header';
import {Notes} from './Notes';
import { Addbutton } from "./Addbutton";
export const Container=()=>{
      return(
            <div className="main__container">
                  <Header/>
                  <Notes/>
                  <Addbutton/>
            </div>
      )
}