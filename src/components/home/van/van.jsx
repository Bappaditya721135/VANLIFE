import { useState, useEffect } from "react";


// components 
import VanCard from "./van-card/vanCard";

// style sheet 
import "./van.styles.scss";

const Van = () => {

    // to store the vans data coming from the fetch request 
    const [vans, setVans] = useState([]);
    
    // fecth call to dummy api server to get the vans data
    useEffect(()=>{
        fetch("/api/van")
        .then((res) => res.json())
        .then(({vans}) => setVans(vans));
    },[])
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
                return(<VanCard key={id} id={id} name={name} price={price} category={category} img={img} />);
            })}
            </div>
        </div>
    );
}

export default Van;