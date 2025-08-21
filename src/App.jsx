import { useState } from 'react'
import './App.css'
import Navbar from './layout/navbar.jsx'
import Footer from './layout/footer.jsx'

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Resume from './pages/resume.jsx'
// import Projects from './pages/projects.jsx'

function App() {
  return (
    <>
      <Navbar />
      
      <Home />
      <About />
      <Resume />
      {/* <Projects /> */}
      
      <Footer />
    </>
  )
}

export default App
