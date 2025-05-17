/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { LangSelected_Menu } from '../../public/js/lang';

import '../css/mode.css';
import '../css/hamburguesa.css';

export function Hamburguesa ({ UIMode, LangMode, displayHamburguesa, hamburguesaState, animationMethod, changeLang }) {
    const menu = LangSelected_Menu(LangMode);
    return (
        <section>
            <svg className={`nav-Hamburguesa color-${UIMode}-mode`} onClick={displayHamburguesa} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <article className={`hamburguesa-content background-${UIMode} display-${hamburguesaState}`}>
                <ul className='hamburguesa-lu'>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/' onClick={displayHamburguesa}><span>{menu.titles.Index}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/experience' onClick={displayHamburguesa}><span>{menu.titles.Experience}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/project' onClick={displayHamburguesa}><span>{menu.titles.Project}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/skill' onClick={displayHamburguesa}><span>{menu.titles.Skill}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/aboutMe' onClick={displayHamburguesa}><span>{menu.titles.AboutMe}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/contact' onClick={displayHamburguesa}><span>{menu.titles.Contact}</span></Link>
                    </li>
                    <li className={`hamburguesa-li color-${UIMode}-mode`}>
                        <a className={`color-${UIMode}-mode`} onClick={changeLang}>
                            <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                              <path d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802' />
                            </svg>
                        </a>
                        {
                            UIMode == 'dark' ? (

                                <a className={`color-${UIMode}-mode`} onClick={animationMethod}>
                                    <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                      <path d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
                                    </svg>
                                </a>

                            ) : (
                                <a className={`color-${UIMode}-mode`} onClick={animationMethod}>
                                    <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                      <path d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
                                    </svg>
                                </a>
                            )
                        }
                    </li>
                </ul>
            </article>
        </section>
    )
}