import React, { useState } from 'react'
import '../App.css'
const Theme = () => {
const [theme,settheme]=useState(true)
  let open = function(){
   if(theme){
    document.querySelector('.theme-clr').className='theme-clr '
    settheme(false)
   }else{
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
   }
   
  }
  let pink = function(){
    document.body.style.setProperty("--primium" , "#fb3848")
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
    
   } 
   let orange = function(){
    document.body.style.setProperty("--primium" , "#ed6908")
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
   } 
   let green = function(){
    document.body.style.setProperty("--primium" , "#249583")
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
   } 
   let blue = function(){
    document.body.style.setProperty("--primium" , "#1560bd")
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
   } 
   let purple = function(){
    document.body.style.setProperty("--primium" , "#ff56b8")
    document.querySelector('.theme-clr').className='theme-clr dis'
    settheme(true)
   } 
  return (
    <>
    <div className='theme'>
        <i class="fa-solid fa-palette" onClick={open}></i>
    </div>
    <div className='theme-clr dis'>
        <p>Theme Color</p>
        <div className='theme-colors'>
            <div className='ccllrr' onClick={pink}></div>
            <div className='ccllrr' onClick={orange}></div>
            <div className='ccllrr' onClick={green}></div>
            <div className='ccllrr' onClick={blue}></div>
            <div className='ccllrr' onClick={purple}></div>
        </div>
    </div>
    </>
  )
}

export default Theme