import "./about.styles.scss";

const About = () => {
    return(
        <div className="aboutpage-container">
            <img src="./img/aboutpage-top-image.jpg" alt="aboutpage" />
            <h2>Don't squeeze in sadan when you could relax in a van.</h2>
            <p className="first-paragraph">Our mission is to enliven your road trip with perfect treval  van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😊)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="van-explore">
                <p>Your destination is waiting.</p>
                <p>Your van is ready.</p>
                <button>Explore our vans</button>
            </div>
        </div>
    );
}

export default About;