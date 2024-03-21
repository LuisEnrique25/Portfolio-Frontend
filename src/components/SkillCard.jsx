import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <article className='flex flex-col items-center gap-2 last:col-span-3 sm:last:col-span-1'>
    
    <div  className='relative flex items-center justify-center overflow-hidden p-6 max-h-fit max-w-fit aspect-square bg-[#C8DEEB] dark:bg-[#011A28] rounded-full  before:absolute before:w-24 before:h-9 before:bg-sky-700 before:dark:bg-sky-400 before:animate-spin-slow after:absolute after:bg-[#C8DEEB] after:dark:bg-[#011A28] after:inset-1 after:rounded-full' >
        {/**----ICON---- */}
        <h2 className={`z-20 text-sky-700 dark:text-sky-400 text-2xl`}><i className={`${skill.icon}`}></i></h2>

    </div>

    {/**-----NAME------ */}
    <h2 className='text-blue-800 dark:text-sky-200 font-semibold text-base sm:text-xl md:text-2xl'>{skill.name}</h2>


    </article>
        
    
  )
}

export default SkillCard