import { NavPage } from './Components/nav'
import { HeaderPage } from './Components/header'
import { Experiencia } from './Components/experiencia'
import { Skills } from './Components/skills'
import { AboutMe } from './Components/aboutMe'

import './App.css'

function App() {
  return (
    <>
      <NavPage />
      <HeaderPage />
      <Experiencia />
      {/* <Skills /> */}
      <AboutMe />
    </>
  )
}

export default App