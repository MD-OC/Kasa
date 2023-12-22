import './Home.scss';

import { useState, useEffect } from "react"
import { fetchAccommodations } from '../../api/api';

import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

function Home() {

    // State pour stocker les donnees des hebergements
    const [accomodations, setAccomodations] = useState(null);

    useEffect(() => {

        // Recupere les donnees des hebergements
        const fetchData = async () => {

            const data = await fetchAccommodations();
            console.log(data);

            // Met a jour le state avec les donnees recuperees
            if (data) {
                setAccomodations(data);
            }
        };

        fetchData();

    }, []);

    return (
        <main className='home'>
            <Banner />
            <Gallery accomodations={accomodations} />
        </main>
    )
}
    
export default Home;
