import React from 'react'
import ProjectItem from './ProjectItem'
import swDataPad from '../assets/swdatapad.png'
import SN from '../assets/ScheckNavi.png'
import SB from '../assets/SoundBoarder.png'
import ET from '../assets/Employee-Tracker.png'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Here are a few of the projects I created over the course of my bootcamp experience:
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={swDataPad} title='Star Wars Datapad' tech='HTML, CSS, JavaScript'
        link='https://nmahban.github.io/swdatapad/'/>
        <ProjectItem img={SN} title='ScheckNavi'
        tech='React, GraphQL, Mongoose'
        link='https://shecknavi-r329.onrender.com/' />
        <ProjectItem img={SB} title='Sound-Boarder'
        tech='Express.js, Handlebars, Sequelize' 
        link='https://sound-boarder.onrender.com/'/>
        <ProjectItem 
        img={ET}
        title='Employee Tracker'
        tech='SQL, Inquirer, Node.js'
        link='https://github.com/ScheckJ/Employee-Tracker' />
        </div>
    </div>
  )
}

export default Projects