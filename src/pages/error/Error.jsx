import './Error.scss';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error__link' to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error
