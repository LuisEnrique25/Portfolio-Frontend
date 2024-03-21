import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <section className="min-h-screen font-['Volkhov']" >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      
    </section>
  )
}

export default App
