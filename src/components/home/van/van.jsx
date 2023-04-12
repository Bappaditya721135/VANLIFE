import VanCard from "./van-card/vanCard";
import "./van.styles.scss";

const Van = () => {

    const vans = [
        {
            id: 1,
            name: "Modest Explorer",
            price: 60,
            category: "Simple",
            img: "./img/modest-explorer.png",
        },
        {
            id: 2,
            name: "Beach Bum",
            price: 80,
            category: "Rugged",
            img: "./img/beach-bum.png",
        },
        {
            id: 3,
            name: "Reliable Red",
            price: 100,
            category: "Luxary",
            img: "./img/reliable-red.png",
        },
        {
            id: 4,
            name: "Dreamfinder",
            price: 65,
            category: "Simple",
            img: "./img/dreamfinder.png",
        },
        {
            id: 5,
            name: "The Cruiser",
            price: 120,
            category: "Luxary",
            img: "./img/the-cruiser.png",
        },
        {
            id: 6,
            name: "Green Wonder",
            price: 70,
            category: "Rugged",
            img: "./img/green-wonder.png",
        },
    ]
    return(
        <div className="van-container">
            <h2>Explore our van options</h2>
            <ul>
                <li>
                    <button>Simple</button>
                </li>
                <li>
                    <button>Luxary</button>
                </li>
                <li>
                    <button>Rugged</button>
                </li>
            </ul>

            {/* this loop is for vanCard componen */}
            <div className="all-vans">
            {vans.map(({id, name, price, category, img}) => {
                return(<VanCard key={id} name={name} price={price} category={category} img={img} />);
            })}
            </div>
        </div>
    );
}

export default Van;