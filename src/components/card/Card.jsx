import './Card.scss';
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {
    
    return (
        
        <article className="card">
        
            <Link to={`/accomodation/${id}`} className="card__cover">
                <img className="card__image" src={cover} alt={title} />
                <h2 className="card__title">{title}</h2>	
            </Link>
            
        </article>
            
    )
}

export default Card
