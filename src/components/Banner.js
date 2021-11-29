import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Supernova Music'
    return (
        <div className='sm-banner'>
                <img src={logo} alt='Supernova Music' className='sm-logo'/>
                <h1 className='sm-title'>{title}</h1>
            </div>
    )
}

export default Banner