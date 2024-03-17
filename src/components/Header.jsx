import React, { useState } from 'react'
import DarkMode from './DarkMode'

const Header = () => {

    const [isShowMenu, setIsShowMenu] = useState(false)



  return (
    <header className={`relative px-8 bg-slate-700/40 backdrop-blur-md py-2 md:py-3 transition-all ease-in-out `}>
        <div className='w-full h-auto max-w-[1200px] my-0 mx-auto flex items-center justify-between px-2 text-base font-bold  '>

            {/** LOGO */}
            <div className='md:text-xl'><a href="#">Luis Reyes</a>
            </div>

            
            {/** LISTA */}
            <ul className='hidden sm:flex items-center gap-5 md:text-lg'>
                <li ><a href="home">Home</a></li>
                <li><a href="skills">Skills</a></li>
                <li><a href="proyects">Proyects</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
            {/** BOTONES TRANSLATE Y DARKMODE */}
            <div className='hidden sm:flex items-center gap-5 px-2 md:text-lg'>
                <button><i className="fa-solid fa-language"></i></button>
                <DarkMode/>
            </div>


            {/** BOTON SHOW-MENU */}
            <button onClick={() => setIsShowMenu(!isShowMenu)} className=''>
                <i className={`sm:hidden ${isShowMenu ? 'fa-solid fa-xmark' :'fa-solid fa-bars'} `} ></i>
            </button>
        </div>
        {/** MENU DINAMICO */}
        <div className= {`absolute mt-2 rounded-md  bg-slate-500/40 backdrop-blur-sm transition-all ease-in-out text-sm overflow-hidden sm:hidden ${isShowMenu ? 'left-8 right-8':'-right-full left-full'}`}>
            <li className='flex items-center justify-center p-1'><a href="home">Home</a></li>
            <li className='flex items-center justify-center p-1'><a href="skills">Skills</a></li>
            <li className='flex items-center justify-center p-1'><a href="proyects">Proyects</a></li>
            <li className='flex items-center justify-center p-1'><a href="contact">Contact</a></li>
            <div className='grid grid-cols-2 bg-slate-500/40 backdrop-blur-sm'>
            <button className='rounded-bl-md hover:bg-slate-500'><i className="fa-solid fa-language"></i></button>
            <DarkMode/>

            </div>
        </div>
    </header>
  )
}

export default Header