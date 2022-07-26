import React from "react";

import Body from "./Body"

import SubBody from './SubBody';

 import  style from "./css/Header.css";




 let HelloWorld = function () {
    return (
        <div>
    <div className="navbar"><a href="#">Home</a> 
    <a href="#">contact</a> 
    <a href="#">about</a> 
    <a href="#">quries</a>  </div>
      <Body/>
      <SubBody/>
    </div>
    )
}
export default HelloWorld;