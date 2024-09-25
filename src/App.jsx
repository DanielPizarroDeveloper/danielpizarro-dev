import { HeaderPage } from './Components/header'
import { NavPage } from './Components/nav'
import { Experiencia } from './Components/experiencia'
import { Skills } from './Components/skills'
import { SobreMi } from './Components/sobreMi'

import './App.css'

function App() {
  return (
    <>
      <NavPage />
      <HeaderPage />
      <Experiencia />
      <Skills />
      <SobreMi />
    </>
  )
}

export default App

