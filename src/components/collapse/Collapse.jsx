import './Collapse.scss'

import React, { useState, useRef, useEffect } from 'react';
import arrow from '../../assets/collapse-arrow.svg';

function Collapse(props) {

    // State pour gerer l'etat ouvert/ferme du composant
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    // State pour la hauteur dynamique du contenu
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null); // reférence au contenu pour accéder a sa hauteur

    useEffect(() => {

        if (isOpen) {

            // Si ouvert, definit la hauteur au scrollHeight du contenu
            setContentHeight(contentRef.current.scrollHeight);
            console.log(contentRef.current.scrollHeight);

        } else {

            // Si ferme, definit la hauteur a 0
            setContentHeight(0);

        }
    }, [isOpen]); // dépend de l'état isOpen

    // Style pour le contenu, avec hauteur dynamique
    const contentStyle = {
        height: isOpen ? `${contentHeight}px` : '0px'
    };

    return (
        <div className="collapse">

            <div className="collapse__header">

                <h3 className='collapse__header-title'>
                    {props.title}
                </h3>

                <button className='collapse__header-button' onClick={handleOpen}>
                    <img className={isOpen ? 'collapse__header-arrow collapse__header-arrow-down' : 'collapse__header-arrow collapse__header-arrow-up'} src={arrow} alt='Arrow' />
                </button>

            </div>

            <div
                ref={contentRef}
                className={isOpen ? 'collapse__content collapse__content-animation' : 'collapse__content'}
                style={contentStyle}
            >
                {props.children}
            </div>

        </div>
    )
}

export default Collapse
