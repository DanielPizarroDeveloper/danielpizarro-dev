// import '../css/hamburguesa.css'

// export function Hamburguesa ({isVisibleMenu, setIsVisibleMenu}) { 

//     const handlerClickExperiencia = () => {
//         window.location.hash = '#experience';
//         setIsVisibleMenu(!isVisibleMenu)
//     }

//     const handlerClickSkill = () => {
//         window.location.hash = '#programming';
//         setIsVisibleMenu(!isVisibleMenu)
//     }

//     const handlerClickSobreMi = () => {
//         window.location.hash = '#about';
//         setIsVisibleMenu(!isVisibleMenu)
//     }

//     return(
//         <>
//             {
//                 isVisibleMenu == true && (
//                     <nav className='hamburguesa-nav'>
//                         <ul className='hamburguesa-nav__ul'>
//                             <li className='hamburguesa-nav__ul__li'>
//                                 <button className='hamburguesa-nav__ul__li__button' onClick={handlerClickExperiencia}>
//                                     <svg className='hamburguesa-nav__ul__li__button__svg'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
//                                     </svg>
//                                     <span className='hamburguesa-nav__ul__li__button__span'>Experience</span>
//                                 </button>
//                             </li>
//                             <li className='hamburguesa-nav__ul__li'>
//                                 <button className='hamburguesa-nav__ul__li__button' onClick={handlerClickSkill}>
//                                     <svg className='hamburguesa-nav__ul__li__button__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                       <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
//                                     </svg>
//                                     <span className='hamburguesa-nav__ul__li__button__span'>Programming language</span>
//                                 </button>
//                             </li>
//                             <li className='hamburguesa-nav__ul__li'>
//                                 <button className='hamburguesa-nav__ul__li__button' onClick={handlerClickSobreMi}>
//                                     <svg className='hamburguesa-nav__ul__li__button__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                       <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
//                                     </svg>

//                                     <span className='hamburguesa-nav__ul__li__button__span'>About me</span>
//                                 </button>
//                             </li>
//                         </ul>
//                     </nav>
//                 )
//             }
//         </>
//     )
// }

