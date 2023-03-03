import React from 'react'
import '../App.css'
import Card from './Card'
import piano from './image/piano.png'
import prl from'./image/prllx.png'
import todo from './image/todo.png'
import netflix from "./image/netflix.png"

const Project = () => {
  return (
    <div id='project'>
        <h1>Project</h1>
        <div className='project-card'>
        <Card
            imgsrc={netflix}
            title="Netflix Clone"
            link="https://nflixapp.netlify.app"/>
            <Card
            imgsrc={prl}
            title="Parallel-x"
            link="https://hrithik-upadhyay-au46.github.io/Parallel-X/"/>
            <Card
            imgsrc={piano}
            title="Piano"
            link="https://hrithik-upadhyay-au46.github.io/Piano/"/>
            <Card
            imgsrc={todo}
            title="Todo"
            link="https://hrithik-upadhyay-au46.github.io/Todo-list/"/>
        </div>
    </div>
  )
}

export default Project