import React, { useEffect, useState } from 'react'

const DarkMode = () => {

    const [isDark, setIsDark] = useState(localStorage.getItem("theme"))

    const handleIsDark = () => {
        if(isDark === "dark"){
            setIsDark("light")
            localStorage.setItem("theme", "light")
        }else{
            setIsDark("dark")
            localStorage.setItem("theme", "dark")
        }
    }
 {/**
 ////COMO EN ESTE PROYECTO NO SE USARA ESTA FUNCION, LA COMENTO
 const handleResetLS = () => {
     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         setIsDark('dark')
        } else {
            setIsDark('light')
        }
        localStorage.removeItem("theme");
    }
*/}

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }, [isDark])

  return (
    
    <button onClick={handleIsDark} className=" sm:rounded-none flex justify-center items-center "> {(isDark === "light") ? <i className='bx bxs-sun   text-orange-500 hover:text-orange-800 animate-spin-slow w-6 text-lg sm:text-xl '></i> :<i className='bx bxs-moon    text-blue-800 hover:text-sky-300 w-6 text-lg sm:text-xl ' ></i>  }</button>
    
    )
}

export default DarkMode
{/**
 *  //COMO EN ESTE PROYECTO NO SE USARA ESTE BOTON, LO COMENTO
  <button onClick={handleResetLS} className="bg-slate-400/30 hover:bg-white/50 backdrop-blur dark:bg-slate-950/30 dark:hover:dark:bg-slate-950/50 p-1 sm:p-3 rounded-md flex justify-center items-center ">OS</button>
*/}