import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="header">
        
            <img className="header__logo" src={logo} alt='Logo' />
            
            <nav className="navigation">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "navigation__link active" : "navigation__link"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        isActive ? "navigation__link active" : "navigation__link"}
                >
                    A Propos
                </NavLink>
            </nav>
        
        </header>
    );
}

export default Header;
