import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div className=''>

         <Header />
         <Routes>
          <Route  path='/'  element={ <Home />} />

         </Routes>

        
      </div>
    </>
  )
}

export default App
