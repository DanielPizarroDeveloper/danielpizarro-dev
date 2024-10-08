import LogoContent from '../mocks/nav/logo.json'
import columnaNav from '../mocks/nav/columnas.json'

import '../css/nav.css'

export function NavPage() {
    const content = LogoContent
    const columnName = columnaNav

    return(
        <section className='main-section'>
            <nav className='main-section__nav'>
                <ul className='main-section__nav__list'>
                    <li className='main-section__nav__list__logo'>
                        <button className='main-section__nav__button--active'>
                            <a className='main-section__nav__link--active' href='#header'>
                                <svg className='main-section__nav__logo__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path className='main-section__nav__logo__fill' d={content.svg}/>
                                </svg>
                                <span className='main-section__nav__logo__titulo'>{content.titulo}</span>
                            </a>
                        </button>
                    </li>

                    {
                        columnName.map(({id, columna, elementSectionName}) => (
                            <li key={id} className='main-section__nav__list__option'>
                                <a className='main-section__nav__link' href={elementSectionName}>
                                    <span>{columna}</span>
                                </a>
                            </li>
                        ))
                    }

                    <li className='main-section__nav__list__hamburguesa'>
                        <button className='main-section__nav__button--active'>
                            <a className='main-section__nav__link--active' href='#header'>
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}