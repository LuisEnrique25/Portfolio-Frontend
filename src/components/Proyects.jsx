import React, { useEffect, useState } from 'react'
import ProyectsDB from '../db/projects.json'
import ProyectCard from './ProyectCard'

const Proyects = () => {
  
  const [proyects, setProyects] = useState([])

  useEffect(() => {
    setProyects(ProyectsDB)
  }, [])
  return (
    <section id='proyects' className={` min-h-screen dark:text-white  transition-colors ease-linear cursor-default` }>
        <div>
        <h2 className='text-center sm:text-2xl text-xl font-semibold mb-2 sm:mb-4'>Proyects <i className="fa-regular fa-file-code pt-[49px] sm:pt-[52px]"></i></h2>
        </div>
        <section className='grid grid-cols-1 items-center justify-center content-center'>
          {
            proyects.map((proyect) => <ProyectCard key={proyect.name} proyect={proyect} />)
          }
        </section>
    </section>
  )
}

export default Proyects