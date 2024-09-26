export function SobreMi() {
    return (
        <section id="about" style={{paddingTop: '5%', display: 'flex', flexDirection: 'column', height: '500px', backgroundColor: '#f4f4f5' }}>
            <div style={{display: 'flex', justifyContent: 'start', paddingLeft: '10%', alignItems: 'baseline', gap: '10px'}}>
                <h1 style={{textAlign: 'center', color: 'black'}}>Sobre mí</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'center'}}>
                <article style={{paddingTop: '2.5%', paddingLeft: '5%'}}>
                    <img style={{width: '225px', borderRadius: '900px', border: '2px solid black'}} src="img/Avatar.jpg" alt="" />
                </article>

                <article style={{paddingTop: '0%', width: '50%'}}>
                    <div style={{marginTop: '40px', lineHeight: '5px'}}>
                            <h4>Me presento, me llamo Daniel Pizarro Saavedra</h4>
                    </div>
                    
                    <p style={{fontSize: 'small', textAlign: 'left', textWrap: 'balance'}}>
                        Ingeniero informático con más de <strong>5 años de experiencia en desarrollo Backend y automatización de procesos</strong>.
                        <br></br>
                        <br></br>Me especializo en implementar soluciones personalizadas mediante RPA utilizando UiPath Studio. <strong>Mi enfoque es aportar eficiencia y optimización a las empresas mediante la automatización</strong>, integrando modelos de datos robustos con SQL Server.
                    </p>
                    <p style={{fontSize: 'small', textAlign: 'left'}}>
                        A lo largo de mi carrera, <strong>he liderado proyectos de automatización que han simplificado procesos críticos en diferentes áreas de negocio, permitiendo un ahorro significativo de tiempo y recursos.</strong> Actualmente, trabajo como freelance RPA para empresas en Chile, donde sigo entregando soluciones innovadoras.
                    </p>
                    <p style={{fontSize: 'small', textAlign: 'left'}}>
                    <strong>Soy autodidacta y apasionado por aprender nuevas herramientas y lenguajes, lo que me ha permitido desarrollar una carrera multifacética.</strong> Estoy comprometido con seguir creciendo como profesional y aportar al éxito de las empresas con las que colaboro.
                    </p>
                </article>
            </div>
        </section>
    )
}