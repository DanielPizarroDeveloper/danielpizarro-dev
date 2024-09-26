export function Experiencia() {
    return (
        <section id="experiencia" style={{paddingTop: '5%', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f5', height: '500px'}}>
            <div style={{display: 'flex', justifyContent: 'start', marginLeft: '10%', alignItems: 'baseline', gap: '10px'}}>
                <h1 style={{textAlign: 'center', color: 'black'}}>Experiencia</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '100px', justifyContent: 'center'}}>
                <article>
                    <div style={{backgroundColor: '#f4f4f5', position: 'relative', top: '25px', left:'235px', border: '1px solid black', width: '50px', height: '50px', borderRadius: '100px'}}>
                        <svg style={{position: 'relative', top:'10px', left: '10px', width: '30px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <div style={{height: '250px', borderRadius: '15px', border: '1px solid black', padding: '10px', textAlign: 'center', width: '500px'}}>
                        <div style={{marginTop: '40px', lineHeight: '1px'}}>
                            <h4>Desarrollador Freelance</h4>
                            <h5>Cliente: Ingenieria & Construcción Sigdo Koppers</h5>
                            <h5>2023 - Actualmente</h5>
                        </div>
                        <p style={{fontSize: 'small', textAlign: 'left'}}>
                            Actualmente, estoy trabajando en algunos proyectos de automatización RPA con UiPath Studio y C# para la ingenieria & construcción Sigdo Koppers.
                        </p>
                        <p style={{fontSize: 'small', textAlign: 'left'}}>
                            Con la cual se han implementado algunos proyectos además de realización de soporte de los mismos proyctos.
                        </p>
                    </div>
                </article>

                <article>
                    <div style={{backgroundColor: '#f4f4f5', position: 'relative', top: '25px', left:'235px', border: '1px solid black', width: '50px', height: '50px', borderRadius: '100px'}}>
                        <svg style={{position: 'relative', top:'10px', left: '10px', width: '30px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    
                    <div style={{height: '250px', borderRadius: '15px', border: '1px solid black', padding: '10px', textAlign: 'center', width: '500px'}}>
                        <div style={{marginTop: '40px', lineHeight: '1px'}}>
                            <h4>Desarrollador & Analista de datos</h4>
                            <h5>Ingenieria & Construcción Sigdo Koppers</h5>
                            <h5>Enero, 2018 - Abril, 2023</h5>
                        </div>
                        <p style={{fontSize: 'small', textAlign: 'left'}}>
                            He trabajado en el desarrollo de soluciones web para proyectos internos de la empresa utilizando lenguajes como ASP.NET, ASP.NET Core y Azure Functions además de implementaciones de modelos de datos en SQL Server. Además, he desarrollado soluciones de automatización RPA con UiPath Studio.
                        </p>
                        <p style={{fontSize: 'small', textAlign: 'left'}}>
                            Además, he desarrollado soluciones de automatización RPA con UiPath Studio.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}