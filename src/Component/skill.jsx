/* eslint-disable react/prop-types */
import { LangSelected_SkillTitle } from '../../public/js/lang';

import '../css/mode.css';
import '../css/skill.css';

const Skill = ({ UIMode, LangMode, visibleContent }) => {
    const titleLanguage = LangSelected_SkillTitle(LangMode);

    return (
        <>
            {
                visibleContent == true && (
                    <header className={`header-skill display-${visibleContent}`}>
                        <h1 className={`color-${UIMode}-mode`}>{titleLanguage}</h1>
                        <section className='section-skill'>
                            <div className='container-group'>
                                <article className='group-language'>
                                    <h2 className={`backend-align color-${UIMode}-mode title-align`} >BACKEND</h2>
                                    <div className='container-backend'>
                                        <img src='svg/NetCore.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-backend`}>.NET Core</h3>
                                    </div>
                            
                                    <div className='container-backend'>
                                        <img src='svg/Python.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-backend`}>PYTHON</h3>
                                    </div>
                            
                                    <div className='container-backend' >
                                        <img src='svg/Java.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-backend`}>JAVA</h3>
                                    </div>
                            
                                    <div className='container-backend'  >
                                        <img src='svg/UiPath.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-backend`}>UIPATH</h3>
                                    </div>
                                </article>
                            
                                <article className='group-language'>
                                    <h2 className={`color-${UIMode}-mode title-align`} >FRONTEND</h2>
                                    <div className='container-frontend'>
                                        <img src='svg/Html.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-frontend`}>HTML</h3>
                                    </div>
                            
                                    <div className='container-frontend'>
                                        <img src='svg/Css.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-frontend`}>CSS</h3>
                                    </div>
                            
                                    <div className='container-frontend'>
                                        <img src='svg/JS.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-frontend`}>JAVASCRIPT</h3>
                                    </div>
                            
                                    <div className='container-frontend'>
                                        <img src='svg/ReactJS.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-frontend`}>REACT JS</h3>
                                    </div>
                                </article>
                            </div>
                            
                            <div className='container-group'>
                                <article className='group-language'>
                                    <h2 className={`color-${UIMode}-mode title-align`}>DATABASE</h2>
                                    <div className='container-database'>
                                        <img src='svg/SQLServer.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-database`}>SQL SERVER</h3>
                                    </div>
                            
                                    <div className='container-database'>
                                        <img src='svg/Oracle.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-database`}>ORACLE</h3>
                                    </div>
                            
                                    <div className='container-database'>
                                        <img src='svg/MySQL.SVG' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-database`}>MYSQL</h3>
                                    </div>
                                </article>
                            
                                <article className='group-language'>
                                    <h2 className={`color-${UIMode}-mode title-align`} >NOSQL</h2>
                                    <div className='container-NoSQL'>
                                        <img src='svg/Firebase.svg' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-NoSQL`}>FIREBASE</h3>
                                    </div>
                            
                                    <div className='container-NoSQL'>
                                        <img src='svg/MongoDB.svg' alt='' />
                                        <h3 className={`color-${UIMode}-mode width-field-NoSQL`}>MONGODB</h3>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </header>
                )
            }
        </>
    )
}

export default Skill;