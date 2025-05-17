import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/home';
import Skill from './Component/skill';
import { Menu } from './Component/menu';
import AboutMe from './Component/about';
import Contact from './Component/contact';
import Project from './Component/project';
import Experience from './Component/experience';
import { ActivateAPI } from './service/sendMail';
import { change_Theme } from '../public/js/UIMode';
import { Hamburguesa } from './Component/hamburguesa';
import { nav_effect_title } from '../public/js/effect-nav';

import './App.css';
import './css/mode.css';

function App() {
  const [styleSelectedHome, setStyleSelectedHome] = useState('nav-li-inactive');
  const [styleSelectedExperience, setStyleSelectedExperience] = useState('nav-li-inactive');
  const [styleSelectedProject, setStyleSelectedProject] = useState('nav-li-inactive');
  const [styleSelectedSkill, setStyleSelectedSkill] = useState('nav-li-inactive');
  const [styleSelectedAboutMe, setStyleSelectedAboutMe] = useState('nav-li-inactive');
  const [styleSelectedContact, setStyleSelectedContact] = useState('nav-li-inactive');

  const [statusAPI, setStatusAPI] = useState(null);
  const [visibleContent, setVisibleContent] = useState(true);
  const [visibleHamburguesa, setVisibleHamburguesa] = useState('block');
  const [modeUI, setModeUI] = useState(localStorage.getItem('modeUI') || 'dark');
  const [lang, setLang] = useState(localStorage.getItem('lang') === 'null' ? 'EN' : localStorage.getItem('lang') || 'EN');
  
  //UseEffect que realiza un ping a la API (Desactivas Inactividad)
  useEffect(() => {
    ActivateAPI(setStatusAPI);
  }, [statusAPI])

  //UseEffect que realiza la modificación del theme de la página
  useEffect(() => {
    localStorage.setItem('modeUI', modeUI);
  }, [modeUI]);


  //UseEffect que realiza la modificación del idioma de la página
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  //UseEffect que aplica el estilo al título actual del menu
  useEffect(() => {
    handlerRender();
  }, []);

  //Método que ejecuta la animación del cambio del style
  const handleClick = () => {
    change_Theme(setModeUI);
  };

  //Método que aplica el idioma de la página
  const handleClick_Lang = () => {
    setLang((prev) => (prev === 'EN' ? 'ES' : 'EN'));
  }

  //Método que actualiza los style de los títulos del nav
  const handlerClick_Title_Selected = (event) => {
    var webCurrently = event.currentTarget.getAttribute("href");
    nav_effect_title(webCurrently, setStyleSelectedExperience, setStyleSelectedProject, setStyleSelectedSkill, setStyleSelectedAboutMe, setStyleSelectedContact, setStyleSelectedHome);
  }
  
  //Método que setea el style si el usuario actualiza la página
  const handlerRender = () => {
    // var websiteCurrently = window.location.pathname;
    var websiteCurrently = window.location.href;
    console.log(websiteCurrently);
    nav_effect_title(websiteCurrently, setStyleSelectedExperience, setStyleSelectedProject, setStyleSelectedSkill, setStyleSelectedAboutMe, setStyleSelectedContact, setStyleSelectedHome);
  }

  //Método que realiza el swtich del menu hamburguesa
  const handlerClick_Menu = () => {
    setVisibleHamburguesa((prev) => (prev === 'none' ? 'block' : 'none'));
    setVisibleContent(prevState => !prevState);
  }
  
  return (
    <section className={`background-${modeUI}`}>
      <Router>
        <Menu
          animationMethod={handleClick}
          UIMode={modeUI}
          changeLang={handleClick_Lang}
          LangMode={lang}
          webCurrently={handlerClick_Title_Selected}
          HomeStyle={styleSelectedHome}
          ExperienceStyle={styleSelectedExperience}
          ProjectStyle={styleSelectedProject}
          SkillStyle={styleSelectedSkill}
          AboutStyle={styleSelectedAboutMe}
          ContactStyle={styleSelectedContact}
        />
        <Routes>
          <Route path='/' element={ <Home UIMode={modeUI} LangMode={lang} visibleContent={visibleContent} /> } />
          <Route path='/experience' element={<Experience UIMode={modeUI} LangMode={lang} visibleContent={visibleContent} /> } />
          <Route path='/project' element={<Project UIMode={modeUI} LangMode={lang}  visibleContent={visibleContent} /> } />
          <Route path='/skill' element={<Skill UIMode={modeUI} LangMode={lang} visibleContent={visibleContent} /> } />
          <Route path='/AboutMe' element={<AboutMe UIMode={modeUI} LangMode={lang} visibleContent={visibleContent} /> } />
          <Route path='/Contact' element={<Contact UIMode={modeUI} LangMode={lang} visibleContent={visibleContent} /> } />
        </Routes>

        <div className='component-hamburguesa'>
          <Hamburguesa
            UIMode={modeUI}
            LangMode={lang}
            displayHamburguesa={handlerClick_Menu} 
            hamburguesaState={visibleHamburguesa}
            animationMethod={handleClick}
            changeLang={handleClick_Lang}
          />
        </div>
      </Router>
    </section>
  )
}

export default App