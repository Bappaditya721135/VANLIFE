import "./home.styles.scss";


const Home = () => {
    return(
        <div className="homepage-container">
            <img className="homepage-background-img" src="./img/homepage-background.png" alt="homepage-background" />
            <h1 className="homepage-heading">You got travel plans, we got travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button>Find your van.</button>
        </div>
    );
}

export default Home;