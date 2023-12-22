import './Rate.scss';

import starEmpty from '../../assets/star-empty.svg';
import starFull from '../../assets/star-full.svg';

function Rate({rate}) {

    // Tableau representant l'echelle de notation
    const stars = [1, 2, 3, 4, 5];

    return (

        <div className='rate'>

            {/* Genere les etoiles en fonction de la note */}
            {stars.map((star) => (
                rate >= star ?
                    // Affiche une etoile pleine si la note est superieur ou egal a l'index de l'etoile
                    (<img key={star} className='rate__star' src={starFull} alt='Étoile pleine, 1 point' />) : 
                    // Sinon, affiche une etoile vide
                    (<img key={star} className='rate__star' src={starEmpty} alt='Étoile vide, 0 point' />)
            ))}

        </div>

    );

}

export default Rate
