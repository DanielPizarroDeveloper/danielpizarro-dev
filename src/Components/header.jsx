import { Popover, Position, Menu, DownloadIcon, Badge } from 'evergreen-ui'
import BotonesContent from '../mocks/header/contactar.json'
import RedSocialesButton from '../mocks/header/RedesSociales.json'
import Resumen from '../mocks/header/resumen.json'

import '../css/header.css'

export function HeaderPage() {
  const listadoBotones = BotonesContent;
  const listadoRedes = RedSocialesButton;
  const listadoCurriculum = Resumen;

  const sendMail = () => {
    window.location.href = 'mailto:Saavedra.Alejandro@outlook.com?subject=Oportunidad laboral – Contacto&body=Hola Daniel, me gustaría hablar contigo sobre una oportunidad laboral...';
  }

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
              <button className='main-section-header__article__div--button' key={id} onClick={sendMail}>
                <span className='main-section-header__article__div---span'>{contenido}</span>
              </button>
            ))
          }

          <Popover
            position={Position.RIGHT}
            content={
              <Menu>
                <Menu.Group>
                  {
                    listadoCurriculum.map(({id, url, pdfName, version}) => (
                      <Menu.Item key={id} icon={DownloadIcon}>
                        <a style={{textDecoration: 'none', color: 'inherit'}} href={url} download={pdfName}>{version}</a>
                      </Menu.Item>
                    ))
                  }
                </Menu.Group>
                <Menu.Divider />
              </Menu>
            }>
            <button className='main-section-header__article__div--button'>Descargar Curriculum</button>
          </Popover>
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