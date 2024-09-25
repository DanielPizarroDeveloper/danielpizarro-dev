export function Experiencia() {
    return (
        <section id="experiencia" style={{paddingTop: '5%', display: 'flex', flexDirection: 'column', marginBottom: '10%', backgroundColor: '#f4f4f5', height: '500px'}}>
            <div style={{display: 'flex', justifyContent: 'start', marginLeft: '10%', alignItems: 'baseline', gap: '10px'}}>
                <h1 style={{textAlign: 'center', color: 'black'}}>Experiencia</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '100px', justifyContent: 'center'}}>
                <article>
                    <div style={{backgroundColor: '#f4f4f5', position: 'relative', top: '25px', left:'235px', border: '1px solid black', width: '50px', height: '50px', borderRadius: '100px'}}>
                        <svg style={{position: 'relative', top:'10px', left: '10px', width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#000000" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
                        </svg>
                    </div>
                    <div style={{height: '250px', borderRadius: '15px', border: '1px solid black', padding: '10px', textAlign: 'center', width: '500px'}}>
                        <div style={{marginTop: '40px', lineHeight: '1px'}}>
                            <h4 style={{color: '#4b5563'}}>Desarrollador Freelance</h4>
                            <h5 style={{color: '#4b5563'}}>Cliente: Ingenieria & Construcción Sigdo Koppers</h5>
                            <h5 style={{color: '#4b5563'}}>2023 - Actualmente</h5>
                        </div>
                        <p style={{fontSize: 'small', textAlign: 'left', color: '#525252'}}>
                            Actualmente, estoy trabajando en algunos proyectos de automatización RPA con UiPath Studio y C# para la ingenieria & construcción Sigdo Koppers.
                        </p>
                        <p style={{fontSize: 'small', textAlign: 'left', color: '#525252'}}>
                            Con la cual se han implementado algunos proyectos además de realización de soporte de los mismos proyctos.
                        </p>
                    </div>
                </article>

                <article>
                    <div style={{backgroundColor: '#f4f4f5', position: 'relative', top: '25px', left:'235px', border: '1px solid black', width: '50px', height: '50px', borderRadius: '100px'}}>
                        <svg style={{position: 'relative', top:'10px', left: '10px', width: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#000000" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
                        </svg>
                    </div>
                    <div style={{height: '250px', borderRadius: '15px', border: '1px solid black', padding: '10px', textAlign: 'center', width: '500px'}}>
                        <div style={{marginTop: '40px', lineHeight: '1px'}}>
                            <h4 style={{color: '#4b5563'}}>Desarrollador & Analista de datos</h4>
                            <h5 style={{color: '#4b5563'}}>Ingenieria & Construcción Sigdo Koppers</h5>
                            <h5 style={{color: '#4b5563'}}>Enero, 2018 - Abril, 2023</h5>
                        </div>
                        <p style={{fontSize: 'small', textAlign: 'left', color: '#525252'}}>
                            He trabajado en el desarrollo de soluciones web para proyectos internos de la empresa utilizando lenguajes como ASP.NET, ASP.NET Core y Azure Functions además de implementaciones de modelos de datos en SQL Server. Además, he desarrollado soluciones de automatización RPA con UiPath Studio.
                        </p>
                        <p style={{fontSize: 'small', textAlign: 'left', color: '#525252'}}>
                            Además, he desarrollado soluciones de automatización RPA con UiPath Studio.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}