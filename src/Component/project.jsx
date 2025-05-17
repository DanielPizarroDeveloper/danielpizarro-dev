/* eslint-disable react/prop-types */
import { ProjectTools } from '../Component/SubComponent/project-tool';
import { LangSelected_Project, LangSelected_ProjectTitle } from '../../public/js/lang';

import '../css/mode.css';
import '../css/project.css';
import { ProjectPreview } from './SubComponent/project-preview';

const Project = ({ UIMode, LangMode, visibleContent }) => {
    const projectArray = LangSelected_Project(LangMode);
    const titleLanguage = LangSelected_ProjectTitle(LangMode);

    return (
        <>
            {
                visibleContent == true && (
                    <section className={`section-project display-${visibleContent}`}>
                        <h1 className={`color-${UIMode}-mode`}>{titleLanguage}</h1>
                            
                        <div className='container-projects'>
                            {
                                projectArray.map(({id, titleProject, imageProject, content}) => (
                                    <article key={id} className='article-project'>
                                        <img className='image-Project' src={imageProject} alt='' />
                                        <div className='container-project-information'>
                                            <div className='container-title-description'>
                                                <h2 className={`color-${UIMode}-mode`}>{titleProject}</h2>
                                                <p className={`color-${UIMode}-mode`}>{content.content.detail}</p>
                                            </div>
                                
                                            <div className='container-title-description'>
                                                <h3 className={`color-${UIMode}-mode`}>{content.content.secondTitle}</h3>
                                                <ProjectTools UIMode={UIMode} projectID={id} />
                                            </div>
                                
                                            <div className='container-title-description'>
                                                <h3 className={`color-${UIMode}-mode`}>{content.content.thirdTitle}</h3>
                                                <ProjectPreview UIMode={UIMode} projectID={id}/>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Project;