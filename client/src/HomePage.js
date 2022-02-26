import background from './images/background.png'

function HomePage(){



    return(
        <div className="homepage">
        <img src={background} alt="background" />
        <a href="/level1"><button>Play</button></a>
        </div>
    )
}


export default HomePage;