import React, { useEffect, useState } from 'react'
import SkillCard from './SkillCard'
import SkillsDB from '../db/skills.json'


const Skills = () => {

  const [skills, setSkills] = useState([])


  useEffect(() => {
    setSkills(SkillsDB)
  }, [])


  return (
    <section id='skills' className={` min-h-screen dark:text-white  transition-colors ease-linear cursor-default` }>
      <h2 className='text-center sm:text-2xl text-xl font-semibold mb-2 sm:mb-4  pt-[49px] sm:pt-[52px]'>Skills <i className="fa-solid fa-screwdriver-wrench"></i></h2>
       <section className='grid grid-cols-3 sm:grid-cols-4 items-center justify-center gap-2 gap-y-5 sm:gap-y-7'>

        {
          skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)
        }

       </section>
    </section>
  )
}

export default Skills