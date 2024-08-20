import { SocialIcon } from 'react-social-icons';
import './Footer.css'
import { SiReaddotcv } from 'react-icons/si';

function Footer() {

    return (
        <>

            <div className='footer-container'>
                <div className='seperator-footer'></div>
                <div className='social-icons-container'>
                    <SocialIcon url="https://www.linkedin.com/in/telash" />
                    <SocialIcon url="https://github.com/Telashvi" />
                    <SocialIcon url="https://wa.me/0535322492" network="whatsapp" />
                    <div className='resume'>
                        <button><SiReaddotcv /> Get my CV  </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;
