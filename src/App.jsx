import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import Internship from './components/Internship'
import WelcomeS from './components/WelcomeS'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/footer'
import ParticlesBackground from './components/ParticlesBackground'

const App = () => {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <InfoSection />
      <WelcomeS />
      <Internship />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
