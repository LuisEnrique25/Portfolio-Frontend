import React from 'react'
import NavBar from '../components/NavBar'
import Presentation from '../components/Presentation'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Proyects from '../components/Proyects'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <section className='min-h-screen bg-slate-100 dark:text-white dark:bg-black overflow-hidden transition-colors ease-linear flex justify-center'>
      <NavBar/>
      <section className='overflow-hidden '>

      <Presentation/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
      </section>
    </section>
  )
}

export default Home