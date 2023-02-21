/*/<Link href="/">Resource</Link>
                <Link href="/survey">Data</Link>*/

const Navbar = () => {

    return (
        <nav className='N_Bar'>
            <img className="logo" src="logo_TSR.svg"></img>
            <div className="LinkBar">

                <ul className="ulNav">
                    <li><a href="/">Resource</a></li>
                    <li><a href="/survey">Data</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;