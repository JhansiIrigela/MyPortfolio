import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList';
import "../styles/Project.css"

function Projects() {
  return (
    <div className="projects">
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((list, idx) => {
         return <ProjectItem id={idx} name={list.name} image={list.image} />
        })}
        
      </div>
    </div>
  )
}

export default Projects