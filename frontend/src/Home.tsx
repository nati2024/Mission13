import Picture from './JoelHiltonHeadshot.jpg'

function Home () {
    return (
        <div>
            <h1>Joel Hilton</h1>

            <div>
                <p>This is a headshot of Joel Hilton</p>
                <img src={Picture} height="400" />
                <br />
            </div>
        </div>
    )
}

export default Home;