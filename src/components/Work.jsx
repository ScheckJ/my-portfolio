import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2024,
        title: 'University of Richmond Coding Bootcamp',
        duration: 'Feb 2024 - Aug 2024',
        details: 'Completed a coding bootcamp geared towards providing the skills of a junior developer. Languages and programs covered throughout the course of the bootcamp include: HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, React.js, MongoDB, and MySQL'

    },
    {
        year: 2022,
        title: 'Grocery Clerk - Publix',
        duration: 'Current position',
        details: 'Efficiently managed and organized inventory data, ensuring accurate stock levels through regular audits and updates. Also provided technical support to customers, guiding them to find specific products and resolving inquiries.'
    },
    {
        year: 2021,
        title: 'Chiropractic Assistant - Advanced Wellness Centre',
        duration: '1 year',
        details: 'Documented and managed sensitive patient files in a secure digital environment, ensuring compliance with privacy standards and health information regulations. Provided technical support in maintaining office software, including troubleshooting scheduling systems and ensuring seamless patient record management.'

    },
    {
        year: 2019,
        title: 'Physical Therapy Technician - Roberts Physical therapy & Massage',
        duration: '2 years',
        details: 'Developed patient progress documentation systems, ensuring accuracy and consistency in data entry. Collaborated with physical therapists to streamline treatment plan documentation, improving workflow efficiency.'

    },
    
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-1'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx) => (
            <WorkItem 
            key={idx} 
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />

        )

        )}
    </div>
  )
}

export default Work