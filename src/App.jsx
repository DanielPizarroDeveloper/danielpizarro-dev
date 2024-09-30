import { HeaderPage } from './Components/header'
import { NavPage } from './Components/nav'
import { Experiencia } from './Components/experiencia'
import { Skills } from './Components/skills'
import { AboutMe } from './Components/aboutMe'
import { Footer } from './Components/footer'

import './App.css'

function App() {
  return (
    <>
      <NavPage />
      <HeaderPage />
      <Experiencia />
      <Skills />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App

