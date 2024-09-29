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
                    <li>
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
                            <li key={id}>
                                <a className='main-section__nav__link' href={elementSectionName}>
                                    <span>{columna}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}