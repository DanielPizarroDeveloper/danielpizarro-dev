import LogoContent from '../mocks/nav/logo.json'
import columnaNav from '../mocks/nav/columnas.json'

export function NavPage() {
    const content = LogoContent
    const columnName = columnaNav

    return(
        <section style={{display: 'flex', position: 'fixed', zIndex: '100', width: '100%', top: '0px', flexDirection: 'row', justifyContent: 'center', gap: '50px', backgroundColor: 'black', height: '70px'}}>
            <nav style={{display: 'flex', justifyContent: 'center', marginTop: '.5%'}}>
                <ul style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px'}}>
                    <li>
                        <button style={{display: 'flex', border: '0', backgroundColor: 'transparent', alignItems: 'center'}}>
                            <a href="#header" style={{display: 'flex', textDecoration: 'none', color: 'white', alignItems: 'center', gap: '10px'}}>
                                <svg style={{backgroundColor: 'transparent', width: '40px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="#ffffff" d={content.svg}/>
                                </svg>
                                <span style={{color: 'white', fontSize: 'medium'}}>{content.titulo}</span>
                            </a>
                        </button>
                    </li>

                    {
                        columnName.map(({id, columna, elementSectionName}) => (
                            <li key={id} style={{color: 'white', fontWeight: '300', listStyle: 'none'}}>
                                <a href={elementSectionName} style={{textDecoration: 'none', color: 'white'}}>
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