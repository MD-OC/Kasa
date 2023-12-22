import './Footer.scss';
import logo from '../../assets/logo_white.png'

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__img' src={logo} alt='Logo' />
            <h3 className='footer__title' >© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}

export default Footer
