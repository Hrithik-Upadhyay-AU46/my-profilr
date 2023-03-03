import React from 'react'
import '../App.css'


const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={props.imgsrc} alt='card img'/>
        </div>
        <div className='card-details'>
            <h3>{props.title}</h3>
            <a href={props.link}>Demo <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
    </div>
  )
}

export default Card