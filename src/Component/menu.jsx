/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Tooltip, Position } from 'evergreen-ui';
import { LangSelected_Menu, LangOptions_Menu } from '../../public/js/lang';

import '../css/nav.css';
import '../css/mode.css';

//Método animationMethod, que dispara la animación para el cambio de background de la página
export function Menu ({ animationMethod, UIMode, changeLang, LangMode, webCurrently, HomeStyle, ExperienceStyle, ProjectStyle, SkillStyle, AboutStyle, ContactStyle }) {
    const menu = LangSelected_Menu(LangMode);
    const option = LangOptions_Menu(menu, UIMode);

    return (
        <>
            <nav className={`color-${UIMode}-mode`}>
                <ul>
                    <li className={HomeStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/' onClick={webCurrently}><span>{menu.titles.Index}</span></Link>
                    </li>
                    <li className={ExperienceStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/experience' onClick={webCurrently}><span>{menu.titles.Experience}</span></Link>
                    </li>
                    <li className={ProjectStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/project' onClick={webCurrently}><span>{menu.titles.Project}</span></Link>
                    </li>
                    <li className={SkillStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/skill' onClick={webCurrently}><span>{menu.titles.Skill}</span></Link>
                    </li>
                    <li className={AboutStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/aboutMe' onClick={webCurrently}><span>{menu.titles.AboutMe}</span></Link>
                    </li>
                    <li className={ContactStyle}>
                        <Link className={`nav-option-href color-${UIMode}-mode`} to='/contact' onClick={webCurrently}><span>{menu.titles.Contact}</span></Link>
                    </li>
                    <li className='nav-li-svg'>
                        <Tooltip content={menu.option.language} position={Position.RIGHT}>
                            <a className={`color-${UIMode}-mode`} onClick={changeLang}>
                                <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                  <path d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802' />
                                </svg>
                            </a>
                        </Tooltip>
                        {
                            UIMode == 'dark' ? (

                                <Tooltip content={option.optionUI.message} position={Position.RIGHT}>
                                    <a className={`color-${UIMode}-mode`} onClick={animationMethod}>
                                        <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                          <path d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
                                        </svg>
                                    </a>
                                </Tooltip>

                            ) : (
                                <Tooltip content={option.optionUI.message} position={Position.RIGHT}>
                                    <a className={`color-${UIMode}-mode`} onClick={animationMethod}>
                                        <svg className='svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                          <path d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
                                        </svg>
                                    </a>
                                </Tooltip>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </>
    )
}