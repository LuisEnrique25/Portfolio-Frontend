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
    <div className="fixed flex flex-col right-0 top-24 opacity-30 hover:opacity-100  text-2xl">
    <button onClick={handleIsDark} className="bg-slate-400/30 hover:bg-white/50 backdrop-blur dark:bg-slate-950/30 dark:hover:dark:bg-slate-950/50 p-1 sm:p-2 rounded-md flex justify-center items-center">{(isDark === "light") ? <i className="fa-regular fa-lightbulb"></i> : <i className="fa-regular fa-lightbulb"></i> }</button>
    {/**
     *  //COMO EN ESTE PROYECTO NO SE USARA ESTE BOTON, LO COMENTO
      <button onClick={handleResetLS} className="bg-slate-400/30 hover:bg-white/50 backdrop-blur dark:bg-slate-950/30 dark:hover:dark:bg-slate-950/50 p-1 sm:p-3 rounded-md flex justify-center items-center ">OS</button>
     */}
</div>
  )
}

export default DarkMode