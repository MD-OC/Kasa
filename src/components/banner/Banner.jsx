import './Banner.scss';
import bg from '../../assets/banner-bg.png'

function Banner() {
    return (
        <section className='banner'>
            <img className='banner__img' src={bg} alt='Banner' />
            <h1 className='banner__title' >Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner
