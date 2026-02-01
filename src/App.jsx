import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Line from './Line'
import About from './About'
import Skills from './Skills'
import Contacts from './Contacts'
import Footer from './Footer'

const App = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-fit sm:h-fit bg-primary p-3'>
      <Navbar/>
      <Hero/>
      <Line/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App