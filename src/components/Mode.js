import React, { useState } from 'react'
import '../App.css'

const Mode = () => {
    const[icn,seticn]= useState(true)
    
    let change = function(){
        if(icn){
            document.querySelector('.white').className="white dis"
            document.querySelector('.black').className="black"
            document.querySelector('body').className="light-theme"

           seticn(false)
        }else{
            document.querySelector('.white').className="white"
            document.querySelector('.black').className="black dis"
            document.querySelector('body').className="dark-theme"
            

            seticn(true)
        }
     
    }
  return (
    <div className='mode' onClick={change}>
        <div className='white '><i class="fa-regular fa-sun"></i></div>
        <div className='black dis'><i class="fa-solid fa-moon"></i></div>
    </div>
  )
}

export default Mode