/* eslint-disable react/prop-types */
import { ToolsExperience } from './SubComponent/experience-tool';
import { LangSelected_Experience, LangSelected_ExperienceTitle } from '../../public/js/lang';

import '../css/mode.css';
import '../css/experiencia.css';

const Experience = ({ UIMode, LangMode, visibleContent }) => {
    const experienceArray = LangSelected_Experience(LangMode);
    const titleLanguage = LangSelected_ExperienceTitle(LangMode);
    
    return (
        <>
        {
            visibleContent == true && (
                <header className={`header-experience display-${visibleContent}`}>
                    <section className='section-experience'>
                        <h1 className={`color-${UIMode}-mode`}>{titleLanguage}</h1>
                    
                        {
                            experienceArray.map(({ id, content }) => (
                                <article key={id} className='article-experience'>
                                    <svg className={`experience-svg color-${UIMode}-mode`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'  stroke='currentColor'>
                                      <path d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z' />
                                    </svg>
                                    
                                    <div className='experience-group-container'>
                                        <div className='experience-container'>
                                            <span className={`color-${UIMode}-mode`}>{content.content.title}</span>
                                            <span className={`color-${UIMode}-mode`}>{content.content.position}</span>
                                            <span className={`color-${UIMode}-mode`}>{content.content.date}</span>
                                            <p className={`color-${UIMode}-mode`}>{content.content.detail}</p>
                                        </div>
                                    
                                        <h3 className={`color-${UIMode}-mode`}>{content.content.secondTitle}</h3>
                                        
                                        <ToolsExperience UIMode={UIMode} jobID={id} />
                                    </div>
                                </article>
                            ))
                        }
                    </section>
                </header>
            )
        }
        </>
    )
}

export default Experience;