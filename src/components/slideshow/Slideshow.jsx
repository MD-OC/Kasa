import './Slideshow.scss';
import { useState } from 'react'

import arrowLeft from '../../assets/slideshow-arrow-left.png'
import arrowRight from '../../assets/slideshow-arrow-right.png'

function Slideshow({slideshowPictures}) {
    
    // State pour l'index de l'image actuelle dans le slideshow
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    function nextPicture() {
        // Determine l'image suivante, revient a la premiere si a la fin
        const nextIndex = currentIndex === slideshowPictures.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    function prevPicture() {
        // Determine l'image precedente, passe a la derniere si au debut
        const prevIndex = currentIndex === 0 ? slideshowPictures.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    }

    return (

        <section className='slideshow'>

            {/* Affiche l'image actuelle du slideshow */}
            <img
                className='slideshow__picture'
                src={slideshowPictures[currentIndex]}
                alt='Slide de carrousel'
            />

            {/* Affiche les flèches de navigation si plusieurs images */}
            {slideshowPictures.length > 1 && (

                <>

                {/* Fleche gauche pour l'image precedente */}
                <img
                    className='slideshow__arrow-left'
                    src={arrowLeft}
                    alt='Précédent'
                    onClick={prevPicture}
                />

                {/* Fleche droite pour l'image suivante */}
                <img
                    className='slideshow__arrow-right'
                    src={arrowRight}
                    alt='Suivant'
                    onClick={nextPicture}
                />

                {/* Indicateur de l'image actuelle sur le total */}
                <p className='slideshow__count'>{currentIndex + 1}/{slideshowPictures.length}</p>

                </>

            )}

        </section>

    )
}

export default Slideshow
