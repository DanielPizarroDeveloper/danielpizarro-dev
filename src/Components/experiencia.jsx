import experienciaList from '../mocks/experiencia/laboral.json'
import '../css/experiencia.css'

export function Experiencia() {
    const experiencia = experienciaList;

    return (
        <section id="experiencia" style={{paddingTop: '5%', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f5', height: '500px'}}>
            <div style={{display: 'flex', justifyContent: 'start', marginLeft: '10%', alignItems: 'baseline', gap: '10px'}}>
                <h1 style={{textAlign: 'center', color: 'black'}}>Experiencia</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '100px', justifyContent: 'center'}}>
                {
                    experiencia.map(({ id, svg, titulo, posicion, fecha, parrafo1, parrafo2 })=> (
                        <article key={id}>
                            <div style={{backgroundColor: '#f4f4f5', position: 'relative', top: '25px', left:'235px', border: '1px solid black', width: '50px', height: '50px', borderRadius: '100px'}}>
                                <svg style={{position: 'relative', top:'10px', left: '10px', width: '30px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d={svg}/>
                                </svg>
                            </div>

                            <div style={{height: '250px', borderRadius: '15px', border: '1px solid black', padding: '10px', textAlign: 'center', width: '500px'}}>
                                <div style={{marginTop: '40px', lineHeight: '1px'}}>
                                    <h4>{titulo}</h4>
                                    <h5>{posicion}</h5>
                                    <h5>{fecha}</h5>
                                </div>
                                <p style={{fontSize: 'small', textAlign: 'left'}}>
                                    {parrafo1}
                                </p>
                                <p style={{fontSize: 'small', textAlign: 'left'}}>
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