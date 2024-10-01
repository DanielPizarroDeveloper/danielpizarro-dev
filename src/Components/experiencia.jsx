import experienciaList from '../mocks/experiencia/laboral.json'
import '../css/experiencia.css'

export function Experiencia() {
    const experiencia = experienciaList;

    return (
        <section id="experiencia" className='main-section-exp'>
            <div className='main-section-exp__titulo'>
                <h1 className='main-section-exp__titulo__h1'>Experiencia</h1>
            </div>

            <div className='main-section-exp__experiencia'>
                {
                    experiencia.map(({ id, svg, titulo, posicion, fecha, parrafo1, parrafo2 })=> (
                        <article className='main-section-exp__article' key={id}>
                            <div className='main-section-exp__experiencia__article__icon'>
                                <svg className='main-section-exp__experiencia__article__icon__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d={svg}/>
                                </svg>
                            </div>

                            <div className='main-section-exp__experiencia__article__informacion'>
                                <div className='main-section-exp__experiencia__article__informacion__puesto-Trabajo'>
                                    <h4>{titulo}</h4>
                                    <h5>{posicion}</h5>
                                    <h5>{fecha}</h5>
                                </div>
                                <p className='main-section-exp__experiencia__article__informacion__parrafo'>
                                    {parrafo1}
                                </p>
                                <p className='main-section-exp__experiencia__article__informacion__parrafo'>
                                    {parrafo2}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}