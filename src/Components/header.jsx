import { Badge } from 'evergreen-ui'
import BotonesContent from '../mocks/header/button.json'
import RedSocialesButton from '../mocks/header/RedesSociales.json'

import '../css/header.css'

export function HeaderPage() {
  const listadoBotones = BotonesContent;
  const listadoRedes = RedSocialesButton;

    return (
      <section id="header" className='main-section-header'>
          <article className='main-section-header__article'>
              <img className='main-section-header__article__img' src='img/Winter.jpg' alt='imagen de perfil del porfolio' />
          </article>
  
          <article className='main-section-header__article'>
              <div className='main-section-header__article__personal__information'>
                    <h1>Hola,</h1>
                    <h2>Soy Daniel Pizarro Saavedra</h2>
                    <h3>Ingeniero Informático</h3>
              </div>
                
              <div className='main-section-header__article--badge'>
                  <Badge color="green">
                      Abierto a nuevas oportunidades laborales.
                  </Badge>
              </div>
                
              <div className='main-section-header__article__div'>
                {
                  listadoBotones.map(({id, contenido}) => (
                    <button className='main-section-header__article__div--button' key={id}>
                      <span className='main-section-header__article__div---span'>{contenido}</span>
                    </button>
                  ))
                }
              </div>
  
              <div className='main-section-header__article__div'>
                  {
                    listadoRedes.map(({id, arialLabel, href, arialLabelSVG, viewBox, fill, svg}) => (
                      <button className='main-section-header__article__div--button-svg' key={id} aria-label={arialLabel}>
                          <a href={href} target="_blank" aria-label={arialLabelSVG}>
                            <svg className='main-section-header__article__div--svg' xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
                              <path fill={fill} d={svg}/>
                            </svg>
                          </a>
                      </button>
                    ))
                  }
              </div>
          </article>
      </section>
    )
  }