/* eslint-disable react/prop-types */
import { AboutParagraph } from './SubComponent/about-paragraph';
import { LangSelected_AboutMe, LangSelected_AboutTitle,  } from '../../public/js/lang';

import '../css/mode.css';
import '../css/aboutMe.css'

const AboutMe = ({ UIMode, LangMode, visibleContent }) => {
    const aboutMe =  LangSelected_AboutMe(LangMode);
    const titleLanguage = LangSelected_AboutTitle(LangMode);

    return (
        
        <>
            {
                visibleContent == true && (
                    <header className={`header-about display-${visibleContent}`}>
                        <section className='section-about'>
                            <h1 className={`color-${UIMode}-mode`}>{titleLanguage}</h1>
                            <article className='article-about'>
                                <img className='about-img' src={aboutMe[0].photo} alt='' />
                                <div className='container-about'>
                                    <AboutParagraph UIMode={UIMode} LangMode={LangMode} />
                                    {
                                        aboutMe.map((item, id) => (
                                            <div key={id} className='container-resume'>
                                                <a className='a-download' target='_blank' href={item.pathResume}>
                                                    <button className={`button-about button-${UIMode}-mode`}>    
                                                        {item.titleButton}
                                                    </button>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </article>
                        </section>
                    </header>
                )
            }
        </>
    )
}

export default AboutMe;