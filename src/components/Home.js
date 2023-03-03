import React from 'react'
import '../App.css'
import myimage from './image/me1.png'

const Home = () => {
  return (
    <div id='Home'>
    <div className='home-written'>
        <h1>Hello,my name is <span className='home-span'>Hrithik Upadhyay</span></h1>
        <h1>I'm a <span>Web Developer</span></h1>
        <p> With a solid foundation in both front-end and back-end technologies, I'm eager to jump into the world of fullstack development and build innovative web applications that enhance the user experience.</p>
        <button className='home-btn'><i class="fa-regular fa-user"></i><a href='#about'>More About Me</a></button>
    </div>
    <div className='home-img'>
       <div className='home-create'>
       <img src={myimage} alt='profile Img'/>
        <div className='home-blend'></div>
        <div className='home-blend'></div>
        <div className='home-blend'></div>
       </div>
       
        
    </div>
    </div>

  )
}

export default Home