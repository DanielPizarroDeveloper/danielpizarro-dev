import '../css/aboutMe.css'

export function AboutMe() {
    return (
        <section id='about' className='main-section-aboutMe'>
            <div className='main-section-aboutMe__titulo'>
                <h1 style={{textAlign: 'center', color: 'black'}}>Sobre mí</h1>
            </div>

            <div className='main-section-aboutMe-container'>
                <article style={{paddingTop: '2.5%', display: 'grid', justifySelf: 'center', alignItems: 'center'}}> {/* paddingLeft: '5%' */}
                    <img style={{width: '250px', borderRadius: '900px', border: '2px solid black'}} src="img/Avatar.jpg" alt="" />
                </article>

                <article style={{paddingTop: '0%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '800px'}}>
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
                    </div>
                </article>
            </div>
        </section>
    )
}