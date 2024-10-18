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
                    experiencia.map(({ id, titulo, posicion, fecha, parrafo1, parrafo2 })=> (
                        <article key={id} className={`main-section-exp__article ${id == 1 ? 'padding-experiencia-left' : 'padding-experiencia-right'}`}>
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