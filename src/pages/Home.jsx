import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <section className='min-h-screen bg-slate-400 overflow-hidden'>
      <Header/>
      <section>
        <h2>Presentacion</h2>
      </section>
      <section>
        <h2>Skills</h2>
      </section>
      <section>
        <h2>
          Proyects
        </h2>
      </section>
      <section>
        <h2>
          Contact
        </h2>
      </section>
      <footer>
        <h2>Footer</h2>
      </footer>
    </section>
  )
}

export default Home