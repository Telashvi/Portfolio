import './WeatherApp.css'

function WeatherApp() {

    return (
        <>
            <div className='main-container-weatherapp'>
                
                
                <div className='project-description'>
                    <h1>Weather App <div className='project-year'>2024</div></h1><span>
                    A web application that fetches weather data from an api about a certain city in the world.
                    You can see the current weather, and a forecast for the following week.
                    an option to add to favorites is included. 
                    </span>
                    <div className='project-btns'>
                    <a href='https://github.com/Telashvi/WeatherForecastFrontend' className='repo-btn'>Repository Link</a>
                    <a href='https://weatherforecastfrontend.onrender.com/' className='live-btn'>View site</a>
                    </div>
                </div>

                <img src='https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png'
                    width={'440'} height={'300'} alt='weather-app-img' />
            </div>
        </>
    );
};

export default WeatherApp;
