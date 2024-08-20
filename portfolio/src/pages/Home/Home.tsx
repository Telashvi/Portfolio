import './Home.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

function Home() {

    return (
        <>
            <div className='main-container'>

            <Header />
            <Content/>
            <Footer/>
            </div>
        </>
    );
};

export default Home;
