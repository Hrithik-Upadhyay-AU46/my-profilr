import React from 'react'
import '../App.css'
import avtr from "./image/avtr.png"
const About = () => {
  return (
    <div id='about'>
        <div className='about-upper'>
            <h1>About me</h1>
          <div className='about-mid'>
          <div className='circle'>
                <img src={avtr} alt='anything' />
            </div>
            <div className='circl-details'>
            <h2>Hi,I'm Hrithik</h2>
                <p>I am a passionate and motivated full-stack developer with a solid foundation in both front-end technologies. </p>
                <p>As a full-stack developer, I have experience working with a range of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am proficient in building responsive and user-friendly websites and web applications from scratch, and I have a keen eye for design and detail.</p>
                <button> <i class="fa-regular fa-address-book"></i> <a href='#contact'>Contact Me</a></button>
            </div>
           
          
          </div>
            
        </div>
    </div>
  )
}

export default About