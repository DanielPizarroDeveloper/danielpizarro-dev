import '../css/aboutMe.css'

export function AboutMe() {
    return (
        <section id='about' className='main-section-aboutMe'>
            <div className='main-section-aboutMe__titulo'>
                <h1 className='main-section-aboutMe__titulo_h1'>Sobre mí</h1>
            </div>

            <div className='main-section-aboutMe-container'>
                <article className='main-section-aboutMe-container__article'>
                    <img className='main-section-aboutMe-container__article__img' src="img/Avatar.jpg" alt="imagen de perfil del dueño del porfolio" />
                </article>

                <article>
                    <div className='main-section-aboutMe-container__article__container_presentacion'>
                        <div className='main-section-aboutMe-container__article__container__presentacion_h4'>
                                <h4>Me presento, me llamo Daniel Pizarro Saavedra</h4>
                        </div>
                    
                        <p className='main-section-aboutMe-container__article__container__presentacion__parrafo'>
                            Ingeniero informático con más de <strong>5 años de experiencia en desarrollo Backend y automatización de procesos</strong>.
                            <br></br>
                            <br></br>Me especializo en implementar soluciones personalizadas mediante RPA utilizando UiPath Studio. <strong>Mi enfoque es aportar eficiencia y optimización a las empresas mediante la automatización</strong>, integrando modelos de datos robustos con SQL Server.
                        </p>
                    
                        <p className='main-section-aboutMe-container__article__container__presentacion__parrafo'>
                            A lo largo de mi carrera, <strong>he liderado proyectos de automatización que han simplificado procesos críticos en diferentes áreas de negocio, permitiendo un ahorro significativo de tiempo y recursos.</strong> Actualmente, trabajo como freelance RPA para empresas en Chile, donde sigo entregando soluciones innovadoras.
                        </p>
                        
                        <p className='main-section-aboutMe-container__article__container__presentacion__parrafo'>
                            <strong>Soy autodidacta y apasionado por aprender nuevas herramientas y lenguajes, lo que me ha permitido desarrollar una carrera multifacética.</strong> Estoy comprometido con seguir creciendo como profesional y aportar al éxito de las empresas con las que colaboro.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}