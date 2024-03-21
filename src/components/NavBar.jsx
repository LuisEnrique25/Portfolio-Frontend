import React, { useState } from 'react'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [isShowMenu, setIsShowMenu] = useState(false)
    



  return (
    <header className={`fixed  w-screen px-8 bg-white dark:bg-[#011A28] py-2 md:py-3 transition-all ease-in-out  text-black dark:text-white z-50`}>
        <div className='w-full h-auto max-w-[1200px] my-0 mx-auto grid grid-cols-2 sm:grid-cols-3 items-center justify-between px-2 text-base font-bold  '>

            {/** LOGO */}
            <div className='md:text-xl'><a href="#main">Luis Reyes</a>
            </div>

            
            {/** LISTA */}
            <ul className='hidden sm:flex items-center gap-5 md:text-lg text-sky-700 dark:text-sky-400 md:font-bold '>
                <li > <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#about">About</a></li>
                <li > <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#skills">Skills</a></li>
                <li> <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#proyects">Proyects</a></li>
                <li> <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href='#contact'>Contact</a></li>
            </ul>
            {/** BOTONES TRANSLATE Y DARKMODE */}
            <div className='hidden sm:flex items-center justify-end gap-5 px-2  md:text-lg'>
                {/**
                 * 
                <button><i className="fa-solid fa-language"></i></button>
                 */}
                <DarkMode/>
            </div>


            {/** BOTON SHOW-MENU */}
            <button className='flex items-center justify-end'  onClick={() => setIsShowMenu(!isShowMenu)}>
                <i className={`hover:text-sky-800 dark:hover:text-sky-300 sm:hidden ${isShowMenu ? 'fa-solid fa-xmark' :'fa-solid fa-bars'} `} ></i>
            </button>
        </div>
        {/** MENU DINAMICO */}
        <div className= {`absolute mt-2 rounded-md  bg-slate-500/40 backdrop-blur-sm transition-all ease-in-out text-base gap-2 overflow-hidden sm:hidden ${isShowMenu ? 'left-8 right-8':'-right-full left-full'}`}>
            <li className='flex items-center justify-center p-1'>
                <button onClick={() => setIsShowMenu(!isShowMenu)}>
                    <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#about">About</a>
                </button>
            </li>
            <li className='flex items-center justify-center p-1'>
                <button onClick={() => setIsShowMenu(!isShowMenu)}>
                    <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#skills">Skills</a>
                </button>
            </li>
            <li className='flex items-center justify-center p-1'>
                <button onClick={() => setIsShowMenu(!isShowMenu)}>
                    <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#proyects">Proyects</a>
                </button>
            </li>
            <li className='flex items-center justify-center p-1'>
                <button onClick={() => setIsShowMenu(!isShowMenu)}>
                    <a className='hover:underline hover:text-sky-800 dark:hover:text-sky-300' href="#contact">Contact</a>
                </button>
            </li>
            <div className='grid grid-cols-1   py-1 '>
                {/**
                 *          ////BOTON PARA TRADUCIR/////
            <button className='rounded-bl-md hover:bg-slate-500'><i className="fa-solid fa-language"></i></button>
                 */}
            <DarkMode/>

            </div>
        </div>
    </header>
  )
}

export default NavBar