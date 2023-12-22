import './Accomodation.scss';

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchAccommodations } from '../../api/api';

import Slideshow from '../../components/slideshow/Slideshow';
import Tag from '../../components/tag/Tag';
import Rate from '../../components/rate/Rate';
import Collapse from '../../components/collapse/Collapse';

function Accomodation() {

    // Recuperation de l'id de l'hebergement depuis l'URL
    const accomodationId = useParams().id;

    // Gestion de la navigation programmee
    const navigate = useNavigate();

    // State pour stocker les donnees de l'hebergement
    const [accomodation, setAccomodation] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            const data = await fetchAccommodations();
            console.log(data);

            if (data) {

                // Recuperation de l'hebergement correspondant a l'ID
                const accomodationData = data.find(e => e.id === accomodationId);
                console.log(accomodationData);

                // Redirection si l'hebergement n'est pas trouve
                if (!accomodationData) {
                    navigate('/error'); // route inexistante menant a la page Error
                    return;
                }

                // Mise à jour de l'etat avec les donnees de l'hebergement
                setAccomodation(accomodationData);
            }
        };
    
        fetchData();

    }, [accomodationId, navigate]);

    // Affichage pendant le chargement des donnees
    if (!accomodation) {
        return <div>Chargement...</div>;
    }

    return (

        <main className='accomodation'>

            <Slideshow slideshowPictures={accomodation.pictures}/>

            <section className='accomodation__content'>

                <div className='accomodation__info'>

                    <h2 className='accomodation__info-title'>{accomodation.title}</h2>
                    <p className='accomodation__info-location'>{accomodation.location}</p>

                    <div className='accomodation__info-tags'>

                        {accomodation.tags.map((tag) => {
                            return (
                                <Tag key={tag} tag={tag} />
                            )
                        })}

                    </div>

                </div>

                <div className='accomodation__host'>

                    <div className='accomodation__host-user'>
                        <p className='accomodation__host-name'>{accomodation.host.name}</p>
                        <img className='accomodation__host-picture' src={accomodation.host.picture} alt="Host of this accomodation" />
                    </div>

                    <div className='accomodation__host-rating'>
                        <Rate rate={accomodation.rating} />
                    </div>
                        
                </div>

            </section>

            <section className='accomodation__details'>

                <Collapse title="Description">
                    <p className='collapse__content-text'>{accomodation.description}</p>
                </Collapse>

                <Collapse title="Équipements">
                    <ul className="collapse__content-list">
                        {accomodation.equipments.map((item, index) => (
                            <li key={index} className="collapse__content-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </Collapse>

            </section>

        </main>

    )
}

export default Accomodation
