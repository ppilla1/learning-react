import logo from '../resources/logo.svg';
import '../style/Navbar.css';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="navbar--logo"/>
            <ul className="navbar-content">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;