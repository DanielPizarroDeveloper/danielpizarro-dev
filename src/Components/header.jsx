import { Badge } from 'evergreen-ui'
import BotonesContent from '../mocks/header/button.json'
import RedSocialesButton from '../mocks/header/RedesSociales.json'

export function HeaderPage() {
  const listadoBotones = BotonesContent;
  const listadoRedes = RedSocialesButton;

    return (
      <section id="header" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '12%', paddingBottom: '5%'}}>
          <article style={{marginRight: '50px'}}>
              <img style={{width: '225px', borderRadius: '900px', border: '2px solid black'}} src="img/Winter.jpg" alt="" />
          </article>
  
          <article style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex', flexDirection: 'column', lineHeight: '5px', textAlign: 'center'}}>
                    <h1 style={{color: '#4b5563'}}>Hola,</h1>
                    <h2 style={{color: '#4b5563'}}>Soy Daniel Pizarro Saavedra</h2>
                    <h3 style={{color: '#4b5563'}}>Ingeniero Informático</h3>
              </div>
                
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Badge color="green">
                      Abierto a nuevas oportunidades laborales.
                  </Badge>
              </div>
                
              <div style={{display: 'flex', justifyContent: 'center', gap:'10px', paddingTop: '5%'}}>
                {
                  listadoBotones.map(({id, contenido}) => (
                    <button key={id} style={{color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '50px', width: '200px', height: '50px'}}><span style={{fontSize: '15px'}}>{contenido}</span></button>
                  ))
                }
              </div>
  
              <div style={{display: 'flex', justifyContent: 'center', gap: '10px', paddingTop: '10%'}}>
                  {
                    listadoRedes.map(({id, arialLabel, href, arialLabelSVG, viewBox, fill, svg}) => (
                      <button key={id} style={{border: '0', backgroundColor: 'transparent'}} aria-label={arialLabel}>
                          <a href={href} target="_blank" aria-label={arialLabelSVG}>
                            <svg style={{width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
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