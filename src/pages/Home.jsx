import React from 'react'
import NavBar from '../components/NavBar'
import Presentation from '../components/Presentation'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Proyects from '../components/Proyects'
import Contact from '../components/Contact'
import About from '../components/About'
import WhatsPop from '../components/WhatsPop'


const Home = () => {
  return (
    <section className='min-h-screen bg-white dark:text-white dark:bg-[#011A28] overflow-hidden transition-colors ease-linear flex justify-center relative'>
      <NavBar/>
      <section className='overflow-hidden  '>

      <Presentation/>
      <About/>
      <Skills/>
      <Proyects/>
      
      <Contact/>
      <Footer/>
      <WhatsPop/>
      </section>
    </section>
  )
}

export default Home