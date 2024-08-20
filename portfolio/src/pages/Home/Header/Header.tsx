import { Link } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <>

            <div className='header-container'>

                <Link className='headline' to={'/'}>{'{ } Full Stack Web Developer'}</Link>
                <div className='seperator-header'></div>
            </div>
           
        </>
    );
};

export default Header;