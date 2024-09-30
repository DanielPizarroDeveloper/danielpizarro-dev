import { Badge } from 'evergreen-ui'
import frontendList from '../mocks/lenguajes/fontend.json'
import backendList from '../mocks/lenguajes/backend.json'
import databaseList from '../mocks/lenguajes/database.json'

import '../css/skill.css'

export function Skills() {
    const frontend = frontendList;
    const backend = backendList;
    const database = databaseList;

    return (
        <section id="programacion" className='main-section-skill'>
            <div className='main-section-skill__container__titulo'>
                <h1 className='main-section-skill__titulo'>Lenguajes Programación</h1>
            </div>

            <div className='main-section-skill__container__columns'>
                <article>
                    <div className='main-section-skill__container__columns__logo'>
                        <svg className='main-section-skill__container__columns__logo__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor">
                          <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                    </div>

                    <div className='main-section-skill__container__columns__skill'>
                        <div className='main-section-skill-container__columns__skill__titulo'>
                            <h4 className='main-section-skill-container__columns__skill__titulo__h4'>Frontend</h4>
                        </div>

                        <div className='main-section-skill__container__columns__skill__frontend'>
                            {
                                frontend.map(({id,  svgIcon, viewBox, nombre, nivelManejo, color}) => (
                                    <div key={id} className='main-section-skill__container__columns__skill__content'>
                                        <svg className='main-section-skill__container__columns__skill__content__svg' xmlns="http://www.w3.org/2000/svg" x="10px" y="0px" width="48px" height="48px" viewBox={viewBox} dangerouslySetInnerHTML={{ __html: svgIcon }}></svg>
                                        <div className='main-section-skill__container__columns__skill__content__detalle'>
                                            <span className='main-section-skill__container__columns__skill__content__detalle_span'>{nombre}</span>
                                            <Badge color={color} width={80}>
                                                {nivelManejo}
                                            </Badge>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>

                <article>
                    <div className='main-section-skill__container__columns__logo'>
                        <svg className='main-section-skill__container__columns__logo__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </div>
                        
                    <div className='main-section-skill__container__columns__skill'>
                        <div>
                            <h4 className='main-section-skill-container__columns__skill__titulo__h4'>Backend</h4>
                        </div>
                        
                        <div className='main-section-skill__container__columns__skill__backend'>
                            {
                                backend.map(({id,  svgIcon, viewBox, nombre, nivelManejo, color}) => (
                                    <div key={id} className='main-section-skill__container__columns__skill__content_backend'>
                                        <div className='main-section-skill__container__columns__skill__content__backend__element'>
                                        <svg className='main-section-skill__container__columns__skill__content__backend__svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" height="48px" viewBox={viewBox} dangerouslySetInnerHTML={{ __html: svgIcon }}></svg>
                                            <div className='main-section-skill__container__columns__skill__content__detalle_backend'>
                                                <span className='main-section-skill__container__columns__skill__content__detalle_span'>{nombre}</span>
                                                <Badge color={color} width={80}>
                                                    {nivelManejo}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>

                <article>
                    <div className='main-section-skill__container__columns__logo'>
                        <svg className='main-section-skill__container__columns__logo__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>

                    </div>
                        
                    <div className='main-section-skill__container__columns__skill'>
                        <div>
                            <h4 className='main-section-skill-container__columns__skill__titulo__h4'>Base de datos</h4>
                        </div>
                        
                        <div className='main-section-skill__container__columns__skill__database'>
                            {
                                database.map(({id, svgIcon, nombre, nivelManejo, color}) => (
                                    <div key={id} className='main-section-skill__container__columns__skill__content_database'>
                                        <svg className='main-section-skill__container__columns__skill__content__svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" dangerouslySetInnerHTML={{ __html: svgIcon }}></svg>
                                        <div className='main-section-skill__container__columns__skill__content__detalle'>
                                            <span className='main-section-skill__container__columns__skill__content__detalle_span'>{nombre}</span>
                                            <Badge color={color} width={80}>
                                                {nivelManejo}
                                            </Badge>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}