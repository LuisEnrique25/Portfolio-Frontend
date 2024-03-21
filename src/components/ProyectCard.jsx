import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProyectCard = ({proyect}) => {
    const [icons, setIcons] = useState([])
    useEffect(() => {
        setIcons(proyect.tags)
        console.log(icons);
    },[])
  return (
    <article className='p-2 flex flex-col justify-center items-center lg:flex-row lg:gap-7 max-w-lg lg:max-w-full shadow-md m-auto'>
    <div className='py-2 max-w-md'>
        <img src={proyect.img} alt=""  />
    </div>
    <section>
        <div className='w-fit m-auto'>
        <Link to={proyect.link} target='_blank' className='text-xl text-center p-2 hover:text-[#00bdff] hover:underline font-semibold text-sky-700 dark:text-sky-400 sm:text-2xl'>{proyect.name}</Link>
        </div>


        <p className={`text-sm sm:text-base text-justify p-2   overflow-hidden  sm:max-w-md`}>{proyect.description}</p>

        <div className=' p-2 flex flex-col justify-center items-center gap-2'>
        

        {/**
         * 
        */}
        <div className='flex gap-5 text-sky-700 text-2xl dark:text-sky-400 sm:text-2xl'>
        {
            icons.map((icon) => <i key={icon} className={icon}></i> )
        }
        </div>

        <div className='flex gap-5 text-2xl'>
        <Link to={proyect.github} target='_blank' className='hover:text-[#10FFF1]' > <i className="fa-brands fa-github"></i></Link>
        <Link to={proyect.link} target='_blank' className='hover:text-[#10FFF1]' > <i className="fa-solid fa-link"></i></Link>
        </div>
        </div>
    </section>
</article>

  )
}

export default ProyectCard