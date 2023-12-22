import './Gallery.scss';
import Card from '../../components/card/Card';

function Gallery(props) {

    return (
        <section className='gallery'>

            {props.accomodations && props.accomodations.map(accomodation => (

                <Card
                    key={accomodation.id}
                    id={accomodation.id}
                    title={accomodation.title}
                    cover={accomodation.cover}
                />

            ))}

        </section>
    )
}

export default Gallery
