import React, { useEffect, useState } from 'react'
import DB from '../db/projects.json'

const About = () => {

  const [proyects, setProyects] = useState([]);


  useEffect(() => {
    setProyects(DB)
  }, [])

  return (
    <section id='about' className='bg-[#C0D9E8] text-black dark:bg-[#024265] dark:text-white transition-colors ease-linear cursor-default'>
      
      <section className='flex flex-col items-center gap-3 py-2'>

          <h2 className='sm:text-2xl text-xl font-semibold'>About Me</h2>
          {/**contenedor de cajas */}
          <section className='grid  items-center'>

            {/**----CONTENEDOR TEXTO */}
            <div className='max-w-64 sm:max-w-[550px] h-fit border-2 border-sky-700 px-3 pt-2 pb-5 text-base rounded-md text-center sm:text-xl'>
              <i className="fa-solid fa-code text-sky- dark:text-sky-500 font-semibold text-lg "></i>
              <p className=''>
              I am a Full <span className='text-sky-600 dark:text-sky-400 '>Stack Developer</span> with a passion for building beautiful and user friendly websites. I have a strong understanding of both <span className='font-semibold text-sky-700 dark:text-sky-400'>Front-End</span> and <span className='font-semibold text-emerald-700 dark:text-emerald-400'>Back-End</span> development, and I am excited to put my skills to use in a professional setting!!
              </p>
            </div>

            {/**-----CONTENEDOR DE SKILLS */}
            
          </section>
      </section>
      
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white dark:fill-[#011A28] border-none' viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,32L48,42.7C96,53,192,75,288,122.7C384,171,480,245,576,234.7C672,224,768,128,864,101.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            
      
        
    </section>
  )
}

export default About