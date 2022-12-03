import logo from '../resources/logo.svg';
import '../style/Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="navbar__logo" width="100px"/>
                <ul className="navbar__content">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;