export function NavPage() {
    return(
        <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '50px', backgroundColor: 'black', height: '70px'}}>
            <nav style={{display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
                <ul style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px'}}>
                    <li>
                        <button style={{display: 'flex', flexDirection: 'row', border: '0', backgroundColor: 'transparent', alignItems: 'center', gap: '10px'}}>
                            <svg style={{backgroundColor: 'transparent', width: '40px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                            </svg>
                            <span style={{color: 'white', fontSize: 'medium'}}>DanielPizarroDev</span>
                        </button>
                    </li>
                    <li style={{color: 'white', fontWeight: '300', listStyle: 'none'}}><span>Home</span></li>
                    <li style={{color: 'white', fontWeight: '300', listStyle: 'none'}}><span>News</span></li>
                    <li style={{color: 'white', fontWeight: '300', listStyle: 'none'}}><span>Solutions</span></li>
                    <li style={{color: 'white', fontWeight: '300', listStyle: 'none'}}><span>Products</span></li>
                    <li style={{color: 'white', fontWeight: '300', listStyle: 'none'}}><span>About</span></li>
                </ul>
            </nav>
        </section>
    )
}